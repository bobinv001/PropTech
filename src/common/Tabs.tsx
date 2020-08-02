import React from 'react';
import styled from 'styled-components';

const StyledTabList = styled.ul.attrs({
    role: 'tablist',
})`
    display: flex;
    flex-direction: row;
    margin: 0 0 ${(props) => props.theme.space[3]}px 0;
    padding: 0;
`;

const StyledTab = styled.li.attrs({
    role: 'presentation',
})<{ isActive: boolean }>`
    list-style: none;
    color: ${(props) => (props.isActive ? props.theme.colors['brand-color'] : props.theme.colors['near-black'])};
    border-bottom: ${(props) => (props.isActive ? props.theme.borders[3] : 0)};
    border-color: ${(props) => props.theme.colors['brand-color']};
    padding: ${(props) => props.theme.space[1]}px ${(props) => props.theme.space[3]}px;
    a {
        text-decoration: none;
    }
`;
export const Tabs: React.FC = (props) => <StyledTabList>{props.children}</StyledTabList>;

export const Tab: React.FC<{ isActive: boolean; onClick: VoidFunction; index: number }> = (props) => (
    <StyledTab onClick={props.onClick} isActive={props.isActive}>
        <a
            id={`tab_${props.index + 1}`}
            href="#"
            role="tab"
            aria-selected={props.isActive}
            aria-controls={`tabpanel_${props.index + 1}`}
            tabIndex={props.index}
        >
            {props.children}
        </a>
    </StyledTab>
);

export const TabPanel: React.FC<{ index: number }> = ({ children, index }) => (
    <div id={`tabpanel_${index}`} role="tabpanel" aria-labelledby={`tab_${index}`} aria-hidden={false}>
        {children}
    </div>
);
