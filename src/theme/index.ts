import {
    extendTheme,
    theme as base,
    withDefaultColorScheme,
    withDefaultVariant,
} from '@chakra-ui/react';


const inputSelectStyles = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: 'brand.500',
                },
            },
        },
    },
};

const theme = extendTheme({
    colors: {
        brand:
        {
            50: '#e4fbee',
            100: '#c2efd3',
            200: '#9ce2b7',
            300: '#77d79b',
            400: '#51cb7e',
            500: '#39b265',
            600: '#2a8a4e',
            700: '#1d6337',
            800: '#0d3b20',
            900: '#001606',
        }
    },
    fonts: {
        heading: `Montserrat, ${base.fonts?.heading}`,
        body: `Inter, ${base.fonts?.body}`,
    },
    components: {
        Input: {
            ...inputSelectStyles
        },
        Select: { ...inputSelectStyles },
    }
},
    withDefaultColorScheme({
        colorScheme: 'brand',
        components: ['Checkbox'],
    }),
    withDefaultVariant({
        variant: 'filled',
        components: ['Input', 'Select'],
    })
);


export default theme;

