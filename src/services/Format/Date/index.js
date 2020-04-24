export const formatDateTime = (date, locale = 'en-US') =>
    new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    }).format(date);

export const formatMonth = (date, locale = 'en-US') =>
    new Intl.DateTimeFormat(locale, {
        month: 'long',
    }).format(date);