import IHeaderItems from '@/models/IHeaderItems';
import {
  House,
  Package2,
  Image,
  WandSparkles,
  ScanEye,
  Settings2,
  Eraser,
} from 'lucide-react';

const headerItems: IHeaderItems[] = [
  {
    title: 'HOME',
    icon: <House className="h-4 w-4" />,
    link: '/home',
  },
  {
    title: 'RESTORE_IMAGE',
    icon: <Image className="h-4 w-4" />,
    link: '/transformations/add/restore-image',
  },
  {
    title: 'GENERATE_IMAGE',
    icon: <WandSparkles className="h-4 w-4" />,
    link: '/transformations/add/generate-image',
  },
  {
    title: 'OBJECT_RECOLOR',
    icon: <Settings2 className="h-4 w-4" />,
    link: '/transformations/add/object-recolor',
  },
  {
    title: 'OBJECT_REMOVAL',
    icon: <ScanEye className="h-4 w-4" />,
    link: '/transformations/add/object-removal',
  },
  {
    title: 'BACKGROUND_REMOVAL',
    icon: <Eraser className="h-4 w-4" />,
    link: '/transformations/add/background-removal',
  },
];

export default headerItems;
