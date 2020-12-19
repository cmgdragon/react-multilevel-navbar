const removeLinkDecorators = {
    textDecoration: 'unset',
    color: 'inherit'
}

const removeListDecorators = {
    listStyle: 'none'
}

export const navBar = {
    backgroundColor: 'lightblue'
}


export const navBar__list = {
    padding: '0',
    marginRight: '16px',
    display: 'inline-block',
    verticalAlign: 'top',
    transition: 'all .5s ease-in',
    boxSizing: 'border-box',
    ...removeListDecorators
}

export const navBar__listItem_firstLevel = {
    display: 'inline-table',
    padding: '.5rem'
}

export const navBar__listItem = {
    paddingTop: '.5rem',
    boxSizing: 'border-box'
}

export const navBar__link = {
    padding: '0px',
    ...removeLinkDecorators
}

export const navBar__groupList = {
    padding: '16px',
    whiteSpace: 'nowrap',
    border: '1px solid black',
    overflow: 'hidden',
    opacity: '1',
    transition: 'all .5s',
    position: 'absolute',
    visibility: 'hidden'
}