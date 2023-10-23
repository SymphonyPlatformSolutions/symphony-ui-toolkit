export default {
  title: 'Validations/Validation',
};

export const Validation = () => {
  return `
    <div style="max-width: 800px">
      <h1>Validation</h1>
      <h2>CSS Classes</h2> 
      <p>Some CSS classes are provided to display errors:
        <ul>
            <li><strong>tk-validation--error</strong>: Wrap the component to be validated and it indicates that some errors have occurred.</li>
            <li><strong>tk-validation__errors</strong>: Wrap the list of error messages</li>
        </ul>
      </p>
      <p>Below is an example of the structure:</p>
      <pre class="code">    &lt;span class="tk-validation--error"&gt;
        &lt;YourComponent&gt;
            ...
        &lt;/YourComponent&gt;
        &lt;ul class="tk-validation__errors"&gt;
            &lt;li&gt;An error&lt;/li&gt;
            &lt;li&gt;Another error&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/span&gt;
      </pre>
       </p>
        <h2>Validation on a  Text Field</h2>
          <span class="tk-validation--error">
            <div class="tk-input-group">
                <label for="text-field-input">Field label</label>
                <div class="tk-input__container">
                  <input id="text-field-input" type="text" class="tk-input" placeholder="Type something..." />
                </div>
            </div>
            <ul class="tk-validation__errors">
                <li>This field is required.</li>
            </ul>
          </span>
        <h2>Validation on a Text Area</h2>
          <span class="tk-validation--error">
            <div class="tk-input-group">
                <label for="text-area-input">Field label</label>
                <div class="tk-input__container">
                  <textarea class="tk-input" cols="50" rows="5"></textarea>
                </div>
            </div>
            <ul class="tk-validation__errors">
                <li>This field is mandatory</li>
                <li>You need to enter 3 characters minimum</li>
            </ul>
          </span>
      </div>
    `;
};
