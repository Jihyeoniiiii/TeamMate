import { createGlobalStyle } from "styled-components";

const CreationStyle = createGlobalStyle`
  .creation-container {
    max-width: 600px;
    margin: 0 auto;
    padding: ${(props) => props.theme.spacing.large};
  }

  .creation-title {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: bold;
    margin-bottom: ${(props) => props.theme.spacing.extraLarge};
  }

  .creation-label {
    display: block;
    margin: ${(props) => props.theme.spacing.extraLarge} 0;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  .creation-input,
  .creation-textarea {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.lightgrey};
    padding: ${(props) => props.theme.spacing.medium};
    margin: ${(props) => props.theme.spacing.small} 0;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  .creation-textarea {
    height: 80px;
    resize: none;
  }

  .creation-button-wrapper {
    margin-top: ${(props) => props.theme.spacing.large};
    text-align: center;
  }

  .creation-submit-btn {
    padding: ${(props) => props.theme.spacing.medium} ${(props) => props.theme.spacing.large};
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    border-radius: 5px;
    font-size: ${(props) => props.theme.fontSizes.medium};
    cursor: pointer;
    border: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.colors.primaryDark};
    }
  }
`;

export default CreationStyle;
