import { Temporal } from '@js-temporal/polyfill';
import Cookies from 'js-cookie';
import { Globals } from './globals.js';

export interface AuthCookie {
    username: string;
    userId: string;
    timestamp: number;
}

export function auth(): boolean {
    const cookieJson = Cookies.get('auth');
    if (cookieJson === undefined) {
        return false;
    }
    const authCookie = JSON.parse(cookieJson) as AuthCookie;
    const duration = Temporal.Now.instant().since(Temporal.Instant.fromEpochSeconds(authCookie.timestamp));
    if (duration.round({'largestUnit': 'hour'}).hours >= 6) {
        Globals.username = '';
        Globals.userId = '';
        return false;
    }
    authCookie.timestamp = Temporal.Now.instant().epochSeconds; // Refresh the timestamp. Remove this to enforce logging in every 6 hours
    Globals.username = authCookie.username;
    Globals.userId = authCookie.userId;
    return true;
}