import React from 'react';
import { Card } from '@/components/card/card';
import { ExperienceItem } from '@/components/experience/experience-items';

const Experience: React.FC<ExperienceItem> = React.memo(function Experience({
  id,
  role,
  company,
  period,
  bullets,
  tech,
  link,
}) {
  return (
    <Card
      id={id}
      title={role}
      subtitle={company}
      url={link}
      bullets={bullets}
      technologies={tech || []}
      period={period}
    />
  );
});

export default Experience;
