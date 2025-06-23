import { TkIcon } from '@symphony-ui/uitoolkit-styles/dist/fonts/tk-icons';

import Card from './card';
import CropContent from './crop-content';
import DatePicker from './date-picker';
import {
  DropdownMenu,
  DropdownMenuDivider,
  DropdownMenuItem,
} from './dropdown-menu';
import ExpandableCard from './expandable-card';
import Icon from './icon/FontIcon';
import { InputDecorator, TextArea, TextField } from './input';
import Link from './link';
import Loader from './loader';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from './modal';
import { Checkbox, Radio, Switch } from './selection';
import SelectionStatus from './selection/SelectionStatus';
import { Tooltip, TooltipProps } from './tooltip';
import Typography from './typography';
import Validators from '../core/validators';
import VirtualizedList from './virtualized-list';

/* Let's move into exporting everything with interfaces */
export * from '../core/hoc/index';
export * from './avatar';
export * from './badge';
export * from './banner';
export * from './button';
export * from './drawer';
export * from './dropdown';
export * from './icon';
export * as Icons from './icons';
export * from './nav';
export * from './text-ellipsis';
export * from './time-picker';
export * from './toast';
export * from './validation';
export * from './date-time';

export {
  Card,
  Checkbox,
  CropContent,
  DatePicker,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuDivider,
  ExpandableCard,
  Radio,
  Switch,
  TextArea,
  TextField,
  Tooltip,
  TooltipProps,
  Icon,
  InputDecorator,
  VirtualizedList,
  Link,
  Modal,
  ModalTitle,
  ModalHeader,
  ModalBody,
  ModalFooter,
  SelectionStatus,
  TkIcon,
  Typography,
  Loader,
  Validators,
};
