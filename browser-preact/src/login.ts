import { Temporal } from '@js-temporal/polyfill';
import { html } from 'htm/preact';
import Cookies from 'js-cookie';
import { type ComponentChild, render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { auth } from './auth.js';
import type { AuthCookie } from './auth.js';
import { BaseStyle } from './components/baseStyle.js';

if (auth()) {
    location.href = './designList.html';
} else {
    render(html`<${Login}/>`, document.querySelector('#container')!);
}

function Login(): ComponentChild {
    const [users, setUsers] = useState([] as User[]);
    const [username, setUsername] = useState(localStorage.getItem('username') ?? '');
    const [password, setPassword] = useState('');

    useEffect(() => {
        void (async () => {
            setUsers(await UserApi.loadAll());
        })();
    }, []);

    return html`
        <${BaseStyle}/>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 75%;">
            <table>
                <tr>
                    <td>
                        <label for="usernameInput">Username:</label>
                    </td>
                    <td>
                        <input id="usernameInput" type="text" value="${username}" onInput="${(e: InputEvent) => setUsername((e.target as HTMLInputElement).value)}"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="passwordInput">Password:</label>
                    </td>
                    <td>
                        <input id="passwordInput" type="text" disabled value="(disabled for now)" onInput="${(e: InputEvent) => setPassword((e.target as HTMLInputElement).value)}"/>
                    </td>
                </tr>
            </table>
            <button type="button" disabled="${users.length === 0 ? 'disabled' : false}" onClick="${async (e: Event) => {
                const username = (document.querySelector('#usernameInput') as HTMLInputElement).value;
                if (username === '') {
                    return;
                }
                const button = e.target as HTMLButtonElement;
                button.disabled = true;
                const success = await UserApi.login(username);
                localStorage.setItem('username', username);
                const user = users.find(u => u.name === username);
                if (success && user !== undefined) {
                    const authCookie: AuthCookie = {
                        username: user.name,
                        userId: user.id,
                        timestamp: Temporal.Now.instant().epochSeconds,
                    };
                    Cookies.set('auth', JSON.stringify(authCookie));
                    location.href = './designList.html';
                } else {
                    alert(`User '${username}' does not exist`);
                    button.disabled = false;
                }
            }}">Log in</button>
        </div>
    `;
}