

export default {
  title: 'Components/Card',
};

export const Card = () => `
<div class="tk-ml-2">
  <h1>Card</h1>
  <p>The Card Component is a flexible and extensible <span class="tk-typography--bold">content</span> container.</p>
  <h3 class="tk-mt-2">Default</h3>
  <p>Cards have no fixed width, so they’ll naturally fill the full width of its parent element:</p>
  <div style="" class="tk-mt-2h">
    <div class="tk-card">
      <div class="tk-mt-1 tk-mx-1 tk-typography--bold">Card title</div>
      <div class="tk-m-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div class="tk-size-x-small tk-m-1">
        <button class="tk-button tk-button--primary tk-mr-1">Button</button>
      </div>
    </div>
  </div>
  <h3 class="tk-mt-3h">Content</h3>
  <p>Cards support a wide variety of content, including images, text, list groups, links, icons and more.</p>
  <h4>Examples</h4>
  <div style="width:220px" class="tk-mt-2h">
    <div class="tk-card">
      <div style="height:30px; background-color:cadetblue;" class="tk-card--header"></div>

      <div style="display:flex">
        <div class="tk-mx-1 tk-mt-1 tk-typography--bold">Card title</div>
      </div>
      <div class="tk-ml-1 tk-mb-1h card-description">Card desciption</div>

    </div>
  </div>
  <div class="tk-my-5"></div>
  <div style="width:330px">
    <div class="tk-card">
      <div class="tk-m-1 card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</div>
      <div class="tk-size-x-small tk-m-1">
        <button class="tk-button tk-button--secondary tk-mr-1">Button</button>
        <button class="tk-button tk-button--secondary tk-mr-1">Button</button>
      </div>
    </div>
    <div class="tk-my-5"></div>
    <div style="width:330px" class="tk-mt-2h">
      <div class="tk-card">
        <div style="display:flex">
          <div class="tk-mx-1  tk-mt-1 tk-typography--bold">Jira Integration</div>
        </div>
        <div class="tk-ml-1 tk-mb-h card-description">BNP extension</div>
        <div class="tk-mx-1 tk-mb-1 card-description">Introduce agile components to your work and establish quick
          reporting on your teams.</div>
      </div>
    </div>
    <div class="tk-my-5"></div>
    <div style="width:160px" class="tk-mt-2h">
      <div class="tk-card">
        <div style="display:flex" class="tk-m-1">
          <span class="tk-typography--bold">App title</span>
          <i class=" tk-icon-symphony-logo card-icon tk-ml-1"></i>
        </div>
        <div class="tk-ml-1 tk-mb-1h card-description">App description</div>
      </div>
    </div>
  </div>
</div>
`