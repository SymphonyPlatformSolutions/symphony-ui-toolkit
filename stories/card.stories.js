import jiraIcon  from './static/jiraIcon.svg';
import symIcon  from './static/sym-icon.svg';
import screen  from './static/screen.svg';

export default {
  title: 'Components/Card',
};

export const Card = () => `
<div class="tk-ml-2">
  <h1>Card</h1>
  <h3 class="tk-mt-2">2 columns </h3>
  <div style="width:330px" class="tk-mt-2h">
  <div class="tk-card">
  <div style="width:100%;">  <img style="border-radius: 8px;border-bottom-right-radius: 0;border-bottom-left-radius: 0;"alt="image" alt="image" src=${screen}> </div>
  <div class="card-row">
    <div class="tk-mt-1 tk-ml-1">
      <img src=${jiraIcon}>
    </div>
    <div class="tk-size-x-small tk-m-1">
      <button class="tk-button tk-button--primary tk-mr-1">Install</button>
    </div>
  </div>
  <div style="display:flex">
    <div class="tk-mx-1 tk-typography--bold">Jira Integration</div> <img alt="img" src=${symIcon}>
  </div>
  <div class="tk-ml-1 tk-mb-1h card-description">BNP extension</div>
  <div class="tk-mx-1 tk-mb-1 card-description">Introduce agile components to your work and establish quick
  reporting on your teams.</div>
  </div>
</div>
<h3 class="tk-mt-4">2 column /No screenshot</h3>
  <div style="width:330px">
    <div class="tk-card">
      <div class="card-row">
        <div class="tk-mt-1 tk-ml-1">
          <img alt="image" src=${jiraIcon}>
        </div>
        <div class="tk-size-x-small tk-m-1">
          <button class="tk-button tk-button--primary tk-mr-1">Install</button>
        </div>
      </div>
      <div style="display:flex">
        <div class="tk-mx-1 tk-typography--bold">Jira Integration</div> <img alt="img" src=${symIcon}>
      </div>
      <div class="tk-ml-1 tk-mb-h card-description">BNP extension</div>
      <div class="tk-mx-1 tk-mb-1 card-description">Introduce agile components to your work and establish quick
        reporting on your teams.</div>
    </div>
  </div>
  <div style="width:330px" class="tk-mt-2h">
  <div class="tk-card">
  <div class="card-row">
    <div class="tk-mt-1 tk-ml-1">
      <img alt="image" src=${jiraIcon}>
    </div>
    <div class="tk-size-x-small tk-m-1">
      <button class="tk-button tk-button--primary tk-mr-1">Install</button>
    </div>
  </div>
  <div style="display:flex">
    <div class="tk-mx-1 tk-typography--bold">Jira Integration</div> <img alt="img" src=${symIcon}>
  </div>
  <div class="tk-ml-1 tk-mb-h card-description">BNP extension</div>
  <div class="tk-mx-1 tk-mb-1 card-description">Introduce agile components to your work and establish quick
    reporting on your teams.</div>
</div>
  </div>
  <h3 class="tk-mt-4">1 column</h3>
  <div style="width:160px" class="tk-mt-2h">
  <div class="tk-card">
  <div class="card-row">
    <div class="tk-mt-1 tk-ml-1">
      <img alt="image" src=${jiraIcon}>
    </div>
    <div class="tk-size-x-small tk-m-1">
      <button class="tk-button tk-button--primary tk-mr-1">Install</button>
    </div>
  </div>
  <div style="display:flex">
    <div class="tk-mx-1 tk-typography--bold">Jira Integration</div> <img alt="img" src=${symIcon}>
  </div>
  <div class="tk-ml-1 tk-mb-1h card-description">BNP extension</div>
</div>
</div>
</div>
`