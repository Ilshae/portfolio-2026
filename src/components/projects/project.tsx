import * as React from 'react';
import { Card } from '@/components/card/card';
import type { ProjectItem } from './project-items';

export type ProjectProps = ProjectItem;

export const Project: React.FC<ProjectProps> = (props) => {
  return <Card {...props} />;
};
