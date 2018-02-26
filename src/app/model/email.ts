export interface Email {
    server: string;
    smtpPort?: number;
    useSsl?: boolean;
    priority: number; // 0 = normal, 2 = high
    subject: string;
    sender: {
        displayName?: string,
        emailAddress: string,
        userName?: string,
        password?: string
    };
    recipients: {
        to?: string[],
        cc?: string[],
        bcc?: string[]
    };
    content: {
        text?: string,
        html?: string
    };
}
