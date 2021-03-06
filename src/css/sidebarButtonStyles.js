import { css } from 'styled-components';

const buttonStyle = css`
    display: flex;
    align-items: center;
    max-width: 100%;
    height: 50px;
    background-color: none;
    padding: 0px 25px;
    transition: background-color ${(props) => props.theme.transitionTime}ms;
    user-select: none;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.buttonSelectedColor};
    }
`;

const titleStyle = css`
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    margin-left: 15px;
`;

export { buttonStyle, titleStyle };