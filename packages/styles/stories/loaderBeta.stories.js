export default {
  title: 'Components/LoaderBeta',
};

export const Spinner = () =>
  `
<div class="tk-ml-2">
  <h3 class="tk-mt-5">Default (determinate)</h3>
    <div class="tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--vertical">
      <svg >
        <circle
          class="tk-loader-primary radial-progress-background"
          r="1.5em"
          cx="2em"
          cy="2em"
          fill="transparent"
          strokeDasharray="9.42477796076938em"
          strokeDashoffset="0em"
        >
        </circle>
        <circle
          className="radial-progress-cover"
            r="1.5em"
            cx="2em"
            cy="2em"
            fill="transparent"
            strokeDasharray="9.42477796076938em"
            strokeDashoffset="0em"
        >
        </circle>
        <circle
            className="radial-progress-center"
            r="1.5em"
            cx="2em"
            cy="2em"
            fill="transparent"
            strokeDasharray="9.42477796076938em"
            strokeDashoffset="0em"
        >
        </circle>
      </svg>
    </div>

    <h3 class="tk-mt-5">Variants</h3>
    <div className="tk-loader-container">
      <div class="tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--vertical tk-ml-h">
        <svg >
          <circle
            class="tk-loader-default radial-progress-background"
            r="1.5em"
            cx="2em"
            cy="2em"
            fill="transparent"
            strokeDasharray="9.42477796076938em"
            strokeDashoffset="0em"
          >
          </circle>
          <circle
            className="radial-progress-cover"
              r="1.5em"
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="9.42477796076938em"
              strokeDashoffset="-4.71238898038469em"
          >
          </circle>
          <circle
              className="radial-progress-center"
              r="1.5em"
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="9.42477796076938em"
              strokeDashoffset="0em"
            >
            </circle>
          </svg>
        </div>
        <div class="tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--vertical tk-ml-2h">
          <svg >
            <circle
              class="tk-loader-primary radial-progress-background"
              r="1.5em"
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="9.42477796076938em"
              strokeDashoffset="0em"
            >
            </circle>
            <circle
              className="radial-progress-cover"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="-4.71238898038469em"
            >
            </circle>
            <circle
                className="radial-progress-center"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="0em"
              >
              </circle>
            </svg>
        </div>
        <div class="tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--vertical tk-ml-2h">
          <svg >
            <circle
              class="tk-loader-attention radial-progress-background"
              r="1.5em"
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="9.42477796076938em"
              strokeDashoffset="0em"
            >
            </circle>
            <circle
              className="radial-progress-cover"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="-4.71238898038469em"
            >
            </circle>
            <circle
                className="radial-progress-center"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="0em"
            >
            </circle>
          </svg>
        </div>
        <div class="tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--vertical tk-ml-2h">
          <svg >
            <circle
              class="tk-loader-warning radial-progress-background"
              r="1.5em"
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="9.42477796076938em"
              strokeDashoffset="0em"
            >
            </circle>
            <circle
              className="radial-progress-cover"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="-4.71238898038469em"
            >
            </circle>
            <circle
                className="radial-progress-center"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="0em"
            >
            </circle>
          </svg>
        </div>
        <div class="tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--vertical tk-ml-2h">
          <svg >
            <circle
              class="tk-loader-ok radial-progress-background"
              r="1.5em"
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="9.42477796076938em"
              strokeDashoffset="0em"
            >
            </circle>
            <circle
              className="radial-progress-cover"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="-4.71238898038469em"
            >
            </circle>
            <circle
                className="radial-progress-center"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="0em"
            >
            </circle>
          </svg>
        </div>
      </div>
      <h3 class="tk-mt-5">Sizes</h3>
      <div class="tk-loader-container">
        <div class="tk-loader--spinner-determinate tk-loader-small tk-loader--spinner--vertical tk-ml-h">
          <svg >
            <circle
              class="tk-loader-primary radial-progress-background"
              r="1.5em"
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="9.42477796076938em"
              strokeDashoffset="0em"
            >
            </circle>
            <circle
              className="radial-progress-cover"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="-4.71238898038469em"
            >
            </circle>
            <circle
                className="radial-progress-center"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="0em"
              >
              </circle>
            </svg>
        </div>
          <div class="tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--vertical tk-ml-2h">
            <svg >
              <circle
                class="tk-loader-primary radial-progress-background"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="0em"
              >
              </circle>
              <circle
                className="radial-progress-cover"
                  r="1.5em"
                  cx="2em"
                  cy="2em"
                  fill="transparent"
                  strokeDasharray="9.42477796076938em"
                  strokeDashoffset="-4.71238898038469em"
              >
              </circle>
              <circle
                  className="radial-progress-center"
                  r="1.5em"
                  cx="2em"
                  cy="2em"
                  fill="transparent"
                  strokeDasharray="9.42477796076938em"
                  strokeDashoffset="0em"
                >
                </circle>
              </svg>
          </div>
          <div class="tk-loader--spinner-determinate tk-loader-large tk-loader--spinner--vertical tk-ml-2h">
            <svg>
              <circle
                class="tk-loader-primary radial-progress-background"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="0em"
              >
              </circle>
              <circle
                className="radial-progress-cover"
                  r="1.5em"
                  cx="2em"
                  cy="2em"
                  fill="transparent"
                  strokeDasharray="9.42477796076938em"
                  strokeDashoffset="-4.71238898038469em"
              >
              </circle>
              <circle
                  className="radial-progress-center"
                  r="1.5em"
                  cx="2em"
                  cy="2em"
                  fill="transparent"
                  strokeDasharray="9.42477796076938em"
                  strokeDashoffset="0em"
              >
              </circle>
            </svg>
          </div>
      </div>

    <h3 class="tk-mt-5">With text</h3>
    <div class="tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--vertical">
      <svg >
        <circle
          class="tk-loader-primary radial-progress-background"
          r="1.5em"
          cx="2em"
          cy="2em"
          fill="transparent"
          strokeDasharray="9.42477796076938em"
          strokeDashoffset="0em"
        >
        </circle>
        <circle
          className="radial-progress-cover"
            r="1.5em"
            cx="2em"
            cy="2em"
            fill="transparent"
            strokeDasharray="9.42477796076938em"
            strokeDashoffset="-4.71238898038469em"
        >
        </circle>
        <circle
            className="radial-progress-center"
            r="1.5em"
            cx="2em"
            cy="2em"
            fill="transparent"
            strokeDasharray="9.42477796076938em"
            strokeDashoffset="0em"
        >
        </circle>
      </svg>
        <p class="tk-loader--spinner-medium--vertical-text">Loading...</p>
    </div>

    <h3 class="tk-mt-5">With direction</h3>
    <div class="tk-loader-container">
        <div class="tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--vertical tk-ml-h">
          <svg >
            <circle
              class="tk-loader-primary radial-progress-background"
              r="1.5em"
              cx="2em"
              cy="2em"
              fill="transparent"
              strokeDasharray="9.42477796076938em"
              strokeDashoffset="0em"
            >
            </circle>
            <circle
              className="radial-progress-cover"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="-4.71238898038469em"
            >
            </circle>
            <circle
                className="radial-progress-center"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="0em"
              >
              </circle>
            </svg>
            <p class="tk-loader--spinner-medium--vertical-text">100%</p>
        </div>
          <div class="tk-loader--spinner-determinate tk-loader-medium tk-loader--spinner--horizontal tk-ml-2h">
            <svg >
              <circle
                class="tk-loader-primary radial-progress-background"
                r="1.5em"
                cx="2em"
                cy="2em"
                fill="transparent"
                strokeDasharray="9.42477796076938em"
                strokeDashoffset="0em"
              >
              </circle>
              <circle
                className="radial-progress-cover"
                  r="1.5em"
                  cx="2em"
                  cy="2em"
                  fill="transparent"
                  strokeDasharray="9.42477796076938em"
                  strokeDashoffset="-4.71238898038469em"
              >
              </circle>
              <circle
                  className="radial-progress-center"
                  r="1.5em"
                  cx="2em"
                  cy="2em"
                  fill="transparent"
                  strokeDasharray="9.42477796076938em"
                  strokeDashoffset="0em"
                >
                </circle>
              </svg>
              <p class="tk-loader--spinner-medium--horizontal-text" style="transform: translate(10%, 10%);">Loading...</p>
          </div>
    </div>
</div>
  
`;

export const Linear = () =>
  `
<div class="tk-ml-2">
  <h3 class="tk-mt-5">Default (determinate)</h3>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate" style="width: 50%"></div>
  </div>
  <h3 class="tk-mt-5">Indeterminate</h3>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-indeterminate"></div>
  </div>
  <h3 class="tk-mt-5">With text</h3>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate"></div>
  </div>
  <p class="tk-loader--linear-text">100%<p>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-indeterminate"></div>
  </div>
  <p class="tk-loader--linear-text">Loading...<p>
  <h3 class="tk-mt-5">With value</h3>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate" style="width: 25%"></div>
  </div>
  <p class="tk-loader--linear-text">25%<p>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate" style="width: 50%"></div>
  </div>
  <p class="tk-loader--linear-text">50%<p>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate" style="width: 75%"></div>
  </div>
  <p class="tk-loader--linear-text">75%<p>
  <div class="tk-loader--linear-container">
    <div class="tk-loader--linear-determinate" style="width: 100%"></div>
  </div>
  <p class="tk-loader--linear-text">100%<p>
</div>
`;
