import * as React from 'react';
import { Pagination } from '../src/components';
import '../src/styles';
import './stories.scss';

export const simplePagination: React.FC = () => {
  const items = [
    {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet, sem ac maximus posuere, lacus lacus hendrerit est, sed efficitur urna est eu neque. Phasellus in congue arcu, sed facilisis purus. Quisque pellentesque dictum euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec at varius metus. Vestibulum vel mollis eros, tempor pretium felis. Sed placerat velit ac justo vestibulum sodales. Vestibulum eu lorem pharetra, tempor mauris in, sodales velit.',
    },
    {
      text:
        'Praesent viverra tempor elementum. Vestibulum cursus gravida malesuada. Duis euismod ullamcorper ligula eu convallis. Curabitur ut sem ultrices, posuere est non, consectetur leo. Sed mollis hendrerit ante, vel tincidunt tellus commodo non. In luctus eros mi. Aliquam sed neque sapien. Maecenas eleifend, nulla eget volutpat interdum, nisi nunc pharetra justo, in euismod nisi velit ac orci. Quisque ac enim ut odio dignissim porttitor fermentum sed nibh.',
    },
    {
      text:
        'Duis varius sed erat sed lobortis. Mauris viverra vehicula ex in elementum. Vivamus vehicula porta diam, nec luctus sem consequat sit amet. Sed fringilla in lectus in congue. Donec accumsan eu lacus nec imperdiet. Ut mollis felis et tempor aliquet. Etiam ullamcorper ut tortor eget ultricies. Etiam a nisl eget odio pretium ullamcorper id eget dui. Nam condimentum euismod mauris a mattis. Quisque at augue sed risus bibendum hendrerit. Morbi ac porta massa. Quisque at ullamcorper nulla. Maecenas posuere urna et libero rutrum hendrerit at ornare elit. Ut laoreet arcu eu massa mattis ullamcorper. Fusce eu commodo justo. Nulla eget tortor id mi finibus egestas.',
    },
    {
      text:
        'Aenean dictum semper quam, eget feugiat velit posuere id. Integer porttitor mollis massa, blandit sollicitudin nisi imperdiet convallis. Integer cursus sem id mattis rutrum. Mauris ac viverra nisi. Cras magna felis, tristique vitae dui sit amet, euismod ullamcorper urna. Vestibulum dapibus feugiat ligula, et euismod quam posuere a. Suspendisse potenti. Nulla scelerisque commodo diam, at dignissim nunc commodo quis. Praesent egestas rutrum diam in luctus. Phasellus eget cursus nisl. Nulla at volutpat neque. Integer eleifend, ipsum nec condimentum tincidunt, ligula libero mollis purus, tristique blandit dui sem a nulla. Nunc tincidunt sapien diam, vel sagittis ipsum fermentum ut.',
    },
    {
      text:
        'Quisque ultrices viverra porta. Pellentesque nec felis sollicitudin, semper ipsum molestie, pellentesque nunc. Quisque non ligula nisl. Integer interdum, felis et varius feugiat, sem lacus porta mauris, eu dignissim nunc ex et tellus. Phasellus sit amet leo sit amet tortor facilisis finibus. Mauris convallis dui ut nisl luctus, cursus semper tortor mattis. Nam non tortor a leo malesuada porta eget sit amet arcu. Fusce facilisis nibh nec mauris gravida, et convallis mauris porta. Proin et accumsan arcu. Ut euismod quam a mattis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fringilla tempus risus non rhoncus. Nullam ut interdum lectus. Donec cursus tellus sem, eget congue sem commodo at. Donec suscipit turpis quis laoreet egestas.',
    },
  ];
  const rowsPerPage = { label: 'default', value: 1 };
  const showDropDown = true;

  return (
    <Pagination
      items={items}
      rowsPerPage={rowsPerPage}
      showDropDown={showDropDown}
    />
  );
};

export default {
  title: 'Components/Pagination',
  component: Pagination,
};
