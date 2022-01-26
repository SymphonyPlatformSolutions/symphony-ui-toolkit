export default {
  title: 'Components/Banner',
};

export const Banner = () => {
  return `
    <div class="tk-text-color" style="width: 50%;">
        <h1>Banner</h1>

        <h2>Default</h2>
        
        <div class="tk-m-4">
            <div class="tk-banner tk-banner--info tk-banner--medium">
                <div class="tk-banner__variant-icon"></div>
                <div class="tk-banner__content">Banner text content here</div>
                <button type="button" class="tk-banner__action">Action</button>
                <div class="tk-banner__close"></div>
            </div>

            <div class="tk-banner tk-banner--success tk-banner--medium">
                <div class="tk-banner__variant-icon"></div>
                <div class="tk-banner__content">Banner text content here</div>
                <button type="button" class="tk-banner__action">Action</button>
                <div class="tk-banner__close"></div>
            </div>

            <div class="tk-banner tk-banner--warning tk-banner--medium">
                <div class="tk-banner__variant-icon"></div>
                <div class="tk-banner__content">Banner text content here</div>
                <button type="button" class="tk-banner__action">Action</button>
                <div class="tk-banner__close"></div>
            </div>

            <div class="tk-banner tk-banner--error tk-banner--medium">
                <div class="tk-banner__variant-icon"></div>
                <div class="tk-banner__content">Banner text content here</div>
                <button type="button" class="tk-banner__action">Action</button>
                <div class="tk-banner__close"></div>
            </div>
        </div>
    </div>
    `;
};
