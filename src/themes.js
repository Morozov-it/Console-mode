const media = {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
};

export const lightTheme = {
    ...media,
    background: '#fff',
    fontColor: '#000',
    title: 'light'
};

export const darkTheme = {
    ...media,
    background: '#000',
    fontColor: '#fff',
    title: 'dark'
};


