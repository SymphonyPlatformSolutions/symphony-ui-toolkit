export default {
  title: "Utils",
};

export const TextColors = () =>
  `<div class="tk-ml-2">
    <h1>Text colors</h1>
    <div class="tk-mb-2 tk-text-color">Default text color</div>
    <div class="tk-mb-2 tk-text-color--primary">Primary text color</div>
    <div class="tk-mb-2 tk-text-color--warning">Warning text color</div>
    <div class="tk-mb-2 tk-text-color--ok">Ok text color</div>
    <div class="tk-mb-2 tk-text-color--attention">Attention text color</div>
  </div>`;


export const spacing = () =>
  `
  <div class="tk-ml-2 tk-text-color">
  <div>
    <h1>Spacing</h1>
    UI Toolkit Styles include a set of spacing utility classes for
    <span class="tk-text-color--primary">margin</span> and <span class="tk-text-color--primary">padding</span>. They are
    based on the Symphony design guides.
    This classes relies on a global white space scale from <span class="tk-text-color--primary">4px (h)</span> to
    <span class="tk-text-color--primary">48px (5h)</span>:
    <div>
      <span class="tk-text-color--primary">$factor: 8px;</span>
    </div>
  </div>
  <div class="tk-mt-4h">
    <h2>How to use them?</h2>
    The classes are using the format: <span class="tk-text-color--primary font-bold">.tk-{property}{sides}-{size}</span>
    <p>Where
      <span class="tk-text-color--primary"><i>property</i></span> is one of:
    </p>
    <div>
      <ul>
        <li>
          <code class="tk-text-color--primary">m</code> - for classes that set
          <code class="tk-text-color--primary">margin</code>
        </li>
        <li>
          <code class="tk-text-color--primary">p</code> - for classes that set
          <code class="tk-text-color--primary">padding</code>
        </li>
      </ul>

      <p>Where
        <i class="tk-text-color--primary">sides</i> is one of:
      </p>

      <ul>
        <li>
          <code class="tk-text-color--primary">x</code> - for classes that set both
          <code class="tk-text-color--primary">*-left</code> and
          <code class="tk-text-color--primary">*-right</code>
        </li>
        <li>
          <code class="tk-text-color--primary">y</code> - for classes that set both
          <code class="tk-text-color--primary">*-top</code> and
          <code class="tk-text-color--primary">*-bottom</code>
        </li>
        <li>
          <code class="tk-text-color--primary">t</code> - for classes that set
          <code class="tk-text-color--primary">margin-top</code> or
          <code class="tk-text-color--primary">padding-top</code>
        </li>
        <li>
          <code class="tk-text-color--primary">b</code> - for classes that set
          <code class="tk-text-color--primary">margin-bottom</code> or
          <code class="tk-text-color--primary">padding-bottom</code>
        </li>
        <li>
          <code class="tk-text-color--primary">l</code> - for classes that set
          <code class="tk-text-color--primary">margin-left</code> or
          <code class="tk-text-color--primary">padding-left</code>
        </li>
        <li>
          <code class="tk-text-color--primary">r</code> - for classes that set
          <code class="tk-text-color--primary">margin-right</code> or
          <code class="tk-text-color--primary">padding-right</code>
        </li>
        <li>blank - for classes that set a
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> on all 4 sides of the element
        </li>
      </ul>
      <p>Where
        <i class="tk-text-color--primary">size</i> is one of:
      </p>
      <ul>
        <li>
          <code class="tk-text-color--primary">0</code> - eliminate the <code
            class="tk-text-color--primary">margin</code>
          or
          <code class="tk-text-color--primary">padding</code> by setting it to
          <code class="tk-text-color--primary">0</code>
        </li>
        <li>
          <code class="tk-text-color--primary">h</code> - set the
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> to
          <code class="tk-text-color--primary">$factor * 0.5</code>
          <code class="tk-text-color--primary"> </code>
        </li>
        <li>
          <code class="tk-text-color--primary">1</code> - set the
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> to
          <code class="tk-text-color--primary">$factor * 1</code>
          <code class="tk-text-color--primary"> </code>
        </li>
        <li>
          <code class="tk-text-color--primary">2</code> - set the
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> to
          <code class="tk-text-color--primary">$factor * 2</code>
        </li>
        <li>
          <code class="tk-text-color--primary">2h</code> - set the
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> to
          <code class="tk-text-color--primary">$factor * 2.5</code>
        </li>
        </li>
        <li>
          <code class="tk-text-color--primary">3</code> - set the
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> to
          <code class="tk-text-color--primary">$factor * 3</code>
        </li>
        <li>
          <code class="tk-text-color--primary">3h</code> - set the
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> to
          <code class="tk-text-color--primary">$factor * 3.5</code>
        </li>
        <li>
          <code class="tk-text-color--primary">4</code> - set the
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> to
          <code class="tk-text-color--primary"> $factor * 4</code>
        </li>
        <li>
          <code class="tk-text-color--primary">4h</code> - set the
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> to
          <code class="tk-text-color--primary"> $factor * 4.5</code>
        </li>
        <li>
          <code class="tk-text-color--primary">5</code> - set the
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> to
          <code class="tk-text-color--primary">$factor * 5</code>
        </li>
        <li>
          <code class="tk-text-color--primary">5h</code> - set the
          <code class="tk-text-color--primary">margin</code> or
          <code class="tk-text-color--primary">padding</code> to
          <code class="tk-text-color--primary">$factor * 5.5</code>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <h2 class="tk-my-3h">Examples</h2>
    <div class="border flex-container tk-p-5 tk-mt-5h tk-p-3">
      <div class="box tk-mr-2"> .tk-mr-2h</div>
      <div class="box tk-mr-2"> .tk-mr-2h</div>
      <div class="box tk-mr-2"> .tk-mr-2h</div>
      <div class="box tk-mr-2"> .tk-mr-2h</div>
      <div class="box tk-mr-2"> .tk-mr-2h</div>
      <div class="box tk-mr-2"> .tk-mr-2h</div>
    </div>
    <div class="border flex-container tk-p-5 tk-mt-5h tk-p-3">
      <div class="box tk-mr-2h"> .tk-mr-2h</div>
      <div class="box tk-mr-2h tk-mt-3h">.tk-mr-2h .tk-mt-3h</div>
      <div class="box tk-mr-2h"> .tk-mr-2h</div>
      <div class="box tk-mr-2h tk-mt-3h"> .tk-mr-2h .tk-mt-3h</div>
      <div class="box tk-mr-2h">.tk-mr-2h</div>
      <div class="box tk-mr-2h tk-mt-3h">.tk-mr-2h .tk-mt-3h</div>
    </div>
    <div class="border flex-container tk-p-5 tk-mt-5h tk-p-3">
      <div class="box tk-pt-2h tk-mr-h">.tk-mr-h .tk-pt-2h</div>
      <div class="box tk-mr-2h">.tk-mr-2h</div>
      <div class="box tk-pt-2h tk-mr-h">.tk-mr-h .tk-pt-2h</div>
      <div class="box tk-mr-2h">.tk-mr-2h</div>
      <div class="box tk-pt-2h tk-mr-h">.tk-mr-h .tk-pt-2h</div>
      <div class="box tk-mr-2h">.tk-mr-2h</div>
      <div class="box tk-pt-2h tk-mr-h">.tk-mr-h .tk-pt-2h</div>
      <div class="box tk-mr-2h">.tk-mr-2h</div>
    </div>
    <div class="border flex-container tk-p-5 tk-mt-5h tk-p-3">
      <div class="box tk-mx-5">.tk-mx-5</div>
      <div class="box tk-mx-5">.tk-mx-5</div>
      <div class="box tk-mx-5">.tk-mx-5</div>
    </div>
    <div class="border flex-container tk-p-5 tk-mt-5h">
      <div class="box tk-pr-2">.tk-pr-2</div>
      <div class="box tk-mx-2">.tk-mx-2</div>
      <div class="box tk-mx-2">.tk-mx-2</div>
      <div class="box tk-pr-2">.tk-pr-2</div>
    </div>
  </div>
</div>
    `;


const text = "Research and development refer to activities in connection with corporate or government innovation";
export const Typography = () => `
  <div class="tk-ml-2h">
  <h1 class="tk-mb-4h">Typography</h1>
  <h1 class="tk-typography tk-typography--h1 tk-mb-2h tk-text-ellipsis">H1. ${text}</h1>
  <h2 class="tk-typography tk-typography--h2 tk-mb-2h tk-text-ellipsis">H2. ${text}</h2>
  <h3 class="tk-typography tk-typography--h3 tk-mb-2h tk-text-ellipsis">H3. ${text}</h3>
  <h4 class="tk-typography tk-typography--h4 tk-mb-2h tk-text-ellipsis">H4. ${text}</h4>
  <span class="tk-typography tk-mb-2h tk-text-ellipsis">Body.  ${text}</span>
  <span class="tk-typography tk-typography--small tk-mb-2h tk-text-ellipsis">Small. ${text}</span>
  <span class="tk-typography tk-typography--bold tk-mb-2h tk-text-ellipsis">Bold. ${text}</span>
  <span class="tk-typography tk-typography--italic tk-mb-2h tk-text-ellipsis">Italic. ${text}</span>
</div>`;
