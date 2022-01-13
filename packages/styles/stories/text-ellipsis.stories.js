export default {
    title: 'Components/Text Ellipsis',
};

export const TextEllipsis = () => {
    return (`
    <div style="min-height: 600px">
    
        <h1>Text Ellipsis</h1>
        
        <li>1 row</li>
        <div class="text-ellipsis-container">
            <p class="tk-text-ellipsis" style="-webkit-line-clamp: 1">
                Really, really, really, really, really, really, long text that gets cut!
            </p>
        </div>

        <li>2 rows</li>
        <div class="text-ellipsis-container">
            <p class="tk-text-ellipsis tk-text-ellipsis__multiple-rows" style="-webkit-line-clamp: 2">
                Really, really, really, really, really, really, really, really, really, really, long text that gets cut!
            </p>
        </div>

        <li>Long continuous string - First word</li>
        <div class="text-ellipsis-container">
            <p class="tk-text-ellipsis" style="-webkit-line-clamp: 1">
                Reallyreallyreallyreallylongcontinuousstringforexamplealink
            </p>
        </div>

        <li>Long continuous string - Last word</li>
        <div class="text-ellipsis-container">
            <p class="tk-text-ellipsis" style="-webkit-line-clamp: 1">
                A few words before the reallyreallyreallyreallylongcontinuousstringforexamplealink
            </p>
        </div>

        <li>Long continuous string - 2 rows - Last word</li>
        <p style="font-weight: bold">
            A known limitation of text-ellipsis is if the last word of a multi-line ellipsis is a continuous string it will ellipse before the end.
        </p>
        <div class="text-ellipsis-container">
            <p class="tk-text-ellipsis tk-text-ellipsis__multiple-rows" style="-webkit-line-clamp: 2">
                This is a really, really, really, really, really, really, really, really, reallyreallyreallylongcontinuousstringforexamplealink
            </p>
        </div>
    
    </div>
    `);
};
