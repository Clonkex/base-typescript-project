import { html } from 'htm/preact';
import type { ComponentChild } from 'preact';

export function BaseStyle(): ComponentChild {
    return html`
        <style>
            body {
                padding: 0;
                margin: 0;
                background: #f6f6f6;
            }
            * {
                font-family: "Open Sans", sans-serif;
                font-size: 12px;
            }
            .mainArea {
                margin: 5px;
            }
            button {
                border: 1px solid rgba(27, 31, 35, 0.25);
                border-radius: 3px;
                color: #24292e;
                background: #ebebeb;
                padding: 3px 8px;
            }
            button:hover {
                background-color: #f3f4f6 !important;
            }
            button:disabled {
                background-color: #fafbfc !important;
                border-color: rgba(27, 31, 35, 0.15);
                color: #f1f1f1;
            }
            button:active {
                background-color: #edeff2 !important;
                box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
            }
        </style>
    `;
}