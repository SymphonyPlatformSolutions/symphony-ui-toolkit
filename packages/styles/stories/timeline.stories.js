export default {
  title: 'Components/Timeline',
};

export const collapsed = () => `
<div class="tk-timeline">
   <div class="tk-timeline__item tk-timeline__item--expandable">
      <div class="tk-timeline__item-icon"><i class="tk-icon-plus"></i></div>
      <div class="tk-timeline__item-date">
         <div class="tk-timeline__item-day">1 Mar 2007</div>
         <div class="tk-timeline__item-hours">2:00:00 PM</div>
      </div>
      <div class="tk-timeline__item-contentWrapper">
         <div class="tk-timeline__collapse">
            <div class="tk-timeline__collapse-headerContainer">
               <i class="tk-icon-bottom tk-timeline__collapse-icon"></i>
               <div class="tk-timeline__collapse-header">
                  <div>Title 1</div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="tk-timeline__item tk-timeline__item--expandable">
      <div class="tk-timeline__item-icon"><i class="tk-icon-right-arrow"></i></div>
      <div class="tk-timeline__item-date">
         <div class="tk-timeline__item-day">1 Mar 2007</div>
         <div class="tk-timeline__item-hours">6:00:00 PM</div>
      </div>
      <div class="tk-timeline__item-contentWrapper">
         <div class="tk-timeline__collapse">
            <div class="tk-timeline__collapse-headerContainer">
               <i class="tk-icon-bottom tk-timeline__collapse-icon"></i>
               <div class="tk-timeline__collapse-header">
                  <div>Title 2</div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="tk-timeline__item tk-timeline__item--expandable">
      <div class="tk-timeline__item-icon"><i class="tk-icon-block"></i></div>
      <div class="tk-timeline__item-date">
         <div class="tk-timeline__item-day">1 Mar 2007</div>
         <div class="tk-timeline__item-hours">8:00:00 PM</div>
      </div>
      <div class="tk-timeline__item-contentWrapper">
         <div class="tk-timeline__collapse">
            <div class="tk-timeline__collapse-headerContainer">
               <i class="tk-icon-bottom tk-timeline__collapse-icon"></i>
               <div class="tk-timeline__collapse-header">
                  <div>Title 3</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>`;

export const expanded = () => `
<div class="tk-timeline">
    <div class="tk-timeline__item tk-timeline__item--expandable">
    <div class="tk-timeline__item-icon"><i class="tk-icon-plus"></i></div>
    <div class="tk-timeline__item-date">
        <div class="tk-timeline__item-day">1 Mar 2007</div>
        <div class="tk-timeline__item-hours">2:00:00 PM</div>
    </div>
    <div class="tk-timeline__item-contentWrapper">
        <div class="tk-timeline__collapse">
            <div class="tk-timeline__collapse-headerContainer">
                <i class="tk-icon-top tk-timeline__collapse-icon"></i>
                <div class="tk-timeline__collapse-header">
                <div>Title 1</div>
                </div>
            </div>
            <div class="tk-timeline__collapse-body">
                <div>
                <div class="tk-mb-h tk-badge tk-badge--positive tk-badge--medium">Item 1</div>
                </div>
                <div>
                <div class="tk-badge tk-badge--neutral tk-badge--medium">23.45</div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="tk-timeline__item tk-timeline__item--expandable">
    <div class="tk-timeline__item-icon"><i class="tk-icon-right-arrow"></i></div>
    <div class="tk-timeline__item-date">
        <div class="tk-timeline__item-day">1 Mar 2007</div>
        <div class="tk-timeline__item-hours">6:00:00 PM</div>
    </div>
    <div class="tk-timeline__item-contentWrapper">
        <div class="tk-timeline__collapse">
            <div class="tk-timeline__collapse-headerContainer">
                <i class="tk-icon-top tk-timeline__collapse-icon"></i>
                <div class="tk-timeline__collapse-header">
                <div>Title 2</div>
                </div>
            </div>
            <div class="tk-timeline__collapse-body">
                <div>
                <div class="tk-mb-h tk-badge tk-badge--positive tk-badge--medium">Item 2</div>
                </div>
                <div>
                <div class="tk-badge tk-badge--neutral tk-badge--medium">132.55</div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="tk-timeline__item tk-timeline__item--expandable">
    <div class="tk-timeline__item-icon"><i class="tk-icon-block"></i></div>
    <div class="tk-timeline__item-date">
        <div class="tk-timeline__item-day">1 Mar 2007</div>
        <div class="tk-timeline__item-hours">8:00:00 PM</div>
    </div>
    <div class="tk-timeline__item-contentWrapper">
        <div class="tk-timeline__collapse">
            <div class="tk-timeline__collapse-headerContainer">
                <i class="tk-icon-top tk-timeline__collapse-icon"></i>
                <div class="tk-timeline__collapse-header">
                <div>Title 3</div>
                </div>
            </div>
            <div class="tk-timeline__collapse-body">
                <div>
                <div class="tk-mb-h tk-badge tk-badge--positive tk-badge--medium">Item 3</div>
                </div>
                <div>
                <div class="tk-badge tk-badge--neutral tk-badge--medium">34.12</div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>`;
