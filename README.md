# React Multilevel Navbar

A component that provides a nice-looking multilevel menu bar for your website. It is responsive and also navigable with the focus/tab key.

[**Check a live example!**](https://react-multilevel-navbar.netlify.app/ "**Check a live example!**")

## Props
These are the props you can pass to the component:

|  Name | Type  | Default  | Required  |
| ------------ | ------------ | ------------ | ------------ |
| model  | object  | [model](#model)  | yes |
| custom_width  | string  | 100%  | no|
|  custom_padding | string  | 1.5rem  | no  |
|  custom_fontFamily | string  | Raleway, sans-serif  | no  |
| mobile_breakpoint  |  string | 645px  | no  |
| custom_colors  | object  | [Custom Colors](#custom-colors)  |  no |


### Model
The taxonomy model **must** follow this structure:

    const model = {
    
        ['Level 1'] : {
            ['Sublevel 1-1'] : '#',
            ['Sublevel 1-2'] : '#'
        },
    
        ['Level 2'] : {
            ['Sublevel 2-1']: {
                ['Sublevel 2-1-1']: '#'
            },
            ['Level 2-2'] : {
                ['Level 2-2-1'] : '#'
            }
        }
    	//etc...
		
    }

There is no limit in nesting levels

### Custom colors
The custom_colors prop must be an object of strings, where you specify the property that you want to change. These are the default values:

    props.custom_colors = {
    	background_color: 'rgb(240, 238, 238)',
    	expand_color: 'rgb(255, 190, 190)',
    	hover_color: 'black',
    	contrast_color: 'white'
    }

You do not need to fill the entire object with all the properties, just set the desired ones.
