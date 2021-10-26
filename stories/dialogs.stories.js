export default {
  title: 'Components/Dialogs',
};

export const smallDialog = () => `
<div class="visual-testing-min-size">
  <div class="tk-dialog-backdrop">
    <div class="tk-dialog tk-dialog--small">
      <div class="tk-dialog__title">Dialog with header</div>
      <button class="tk-dialog__close"></button>
      <div class="tk-dialog__header">
      <hr/>
      <div class="header-dialog">
        <i class="tk-icon-lock"></i>
        <i class="tk-icon-call-ongoing"></i>
        <i class="tk-icon-app"></i>
        <i class="tk-icon-bot"></i>
        <i class="tk-icon-customize"></i>
        </div>
        <hr/>
      </div>
      <div class="tk-dialog__body">
        <div class="tk-typography tk-typography--h2">Inscription form</div>
        <div class="tk-input-group tk-mb-1h">
          <div class="tk-input-group__header">
            <label for="input">Name</label>
          </div>
          <div class="tk-input__container">
            <input id="input" type="text" class="tk-input" placeholder="Type something..." />
          </div>
        </div>
        <div class="tk-input-group tk-mb-1h">
        <div class="tk-input-group__header">
          <label for="input">Surname</label>
        </div>
        <div class="tk-input__container">
          <input id="input" type="text" class="tk-input" placeholder="Type something..." />
        </div>
      </div>
        <div class="tk-input-group tk-mb-1h">
        <div class="tk-input-group__header">
          <label for="input">email</label>
        </div>
        <div class="tk-input__container">
          <input id="input" type="text" class="tk-input" placeholder="Type something..." />
        </div>
      </div>
        <div class="tk-input-group tk-mb-1h">
        <div class="tk-input-group__header">
          <label for="input">Company</label>
        </div>
        <div class="tk-input__container">
          <input id="input" type="text" class="tk-input" placeholder="Type something..." />
        </div>
      </div>
      </div>
      <div class="tk-dialog__footer">
        <button class="tk-button tk-button--tertiary">Cancel</button>
        <button class="tk-button tk-button--primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
`;

export const mediumDialog = () => `
<div class="visual-testing-min-size">
  <div class="tk-dialog-backdrop">
    <div class="tk-dialog tk-dialog--medium">
      <div class="tk-dialog__title">Medium dialog title</div>
      <button class="tk-dialog__close"></button>
      <div class="tk-dialog__body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="tk-dialog__footer">
        <button class="tk-button tk-button--tertiary">Cancel</button>
        <button class="tk-button tk-button--primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
`;

export const largeDialog = () => `
<div class="visual-testing-min-size">
  <div class="tk-dialog-backdrop">
    <div class="tk-dialog tk-dialog--large">
    <div class="tk-dialog__title">Large dialog with scrolling content</div>
    <button class="tk-dialog__close"></button>
    <div class="tk-dialog__header">
    <hr/>
    <div class="header-dialog">
      <i class="tk-icon-lock"></i>
      <i class="tk-icon-call-ongoing"></i>
      <i class="tk-icon-app"></i>
      <i class="tk-icon-bot"></i>
      </div>
      <hr/>
    </div>
    <div class="tk-dialog__body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      orem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      orem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      orem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="tk-dialog__footer">
        <button class="tk-button tk-button--tertiary">Cancel</button>
        <button class="tk-button tk-button--primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
`;


export const fullPageDialog = () => `
<div class="visual-testing-min-size">
  <div class="tk-dialog-backdrop">
    <div class="tk-dialog tk-dialog--full-width">
      <div class="tk-dialog__header">
        <div class="tk-dialog__title">Modal title</div>
        <button class="tk-dialog__close"></button>
      </div>
      <div class="tk-dialog__body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="tk-dialog__footer">
        <button class="tk-button tk-button--tertiary">Cancel</button>
        <button class="tk-button tk-button--primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
`;



export const SimpleDialog = () => `
<div class="visual-testing-min-size">
  <div class="tk-dialog-backdrop">
    <div class="tk-dialog">
      <div class="tk-dialog__header">
        <button class="tk-dialog__close"></button>
      </div>  
      <div class="tk-dialog__body">
        This is the simplest modal dialog, without any content on the header, title and footer. It is composed just with the close button and body. 
      </div>
      <div class="tk-dialog__footer"></div>
    </div>
  </div>
</div>
`;
