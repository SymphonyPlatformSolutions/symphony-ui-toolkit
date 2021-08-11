export default {
    title: 'Components/Text Ellipsis',
};

export const TextEllipsis = () => {
    return (`
    <div style="min-height: 600px">
    
        <h1>Text Ellipsis</h1>
        
        <li>1 row</li>
        <div style="background: grey; margin: 16px 0px; padding: 16px; width: 200px">
            <p class="tk-text-ellipsis" style="-webkit-line-clamp: 1">
                Really, really, really, really, really, really, long text that gets cut!
            </p>
        </div>

        <li>2 rows</li>
        <div style="background: grey; margin: 16px 0px; padding: 16px; width: 200px">
            <p class="tk-text-ellipsis tk-text-ellipsis__multiple-rows" style="-webkit-line-clamp: 2">
                Really, really, really, really, really, really, long text that gets cut!
            </p>
        </div>

        <li>Long continuous string</li>
        <div style="background: grey; margin: 16px 0px; padding: 16px; width: 200px">
            <p class="tk-text-ellipsis tk-text-ellipsis__multiple-rows" style="-webkit-line-clamp: 2">
                Reallyreallyreallyreallylongcontinuousstringforexamplealink
            </p>
        </div>
    
    </div>
    `);
};
