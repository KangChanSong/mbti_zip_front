import React from 'react';
import { setChildren } from '../modules/LayoutModule';
import { useSelector , useDispatch } from 'react-redux';
import Layout from './Layout';

const LayoutContainer = () => {

    const { children } = useSelector(state => ({
        children : state.layout.children,
    }));

    const dispatch = useDispatch();
    
    const onLogoClick = children => dispatch(setChildren(children));

    return (
            <Layout 
                children = {children}
                onLogoClick = {onLogoClick}/>
    )
}

export default LayoutContainer;