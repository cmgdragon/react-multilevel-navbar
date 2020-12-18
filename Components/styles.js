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
    marginRight: '1rem',
    display: 'inline-block',
    verticalAlign: 'top',
    transition: 'all .5s ease-in',
    ...removeListDecorators
}

export const navBar__listItem_firstLevel = {
    display: 'inline-table',
    padding: '.5rem'
}

export const navBar__listItem = {
    paddingTop: '.5rem'
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
    transition: 'width 1s'
}