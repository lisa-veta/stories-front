import * as SC from './CardPreview.styles';
import { Badge } from '@shared/ui/Badge';
import { useTheme } from 'styled-components';
import { Button } from '@shared/ui/Button';
import { BasketIcon, CalendarIcon, EditIcon, StatisticsIcon } from '@shared/ui/Icons';
import { formatDate } from '@shared/lib/date';
import { Typography } from '@shared/ui/Typography';

interface CardPreviewProps {
  id: number
  title: string;
  publish_at: string;
  unpublish_at: string;
  author?: string;
  image?: string;
  status: 'draft' | 'active' | 'archived';
  preview_url?: string;
}

export const CardPreview = ({
  id,
  title,
  publish_at,
  unpublish_at,
  author,
  status,
  preview_url,
} : CardPreviewProps) => {
  const theme = useTheme();

  const getStatusLabel = (status: string) => {
    const statusMap = {
      'draft': 'Черновик',
      'active': 'Активно',
      'archived': 'Архив',
    };
    return statusMap[status] || status;
  };

  const getStatusColor = (status: string) => {
    const colorMap = {
      'draft': theme.color.purple,
      'active': theme.color.green,
      'archived': theme.color.orange,
    };
    return colorMap[status] || theme.color.white;
  };

  return (
    <SC.CardContainer key={id} height={preview_url ? '420px' : '220px'}>
      {preview_url &&
        <SC.Image src={preview_url}/>
      }
      <SC.ContentContainer>
        <SC.Container title={title}>
          <SC.Title>{title}</SC.Title>
        </SC.Container>
        <SC.InfoContainer>
          <SC.leftContainer>
            <Badge backgroundColor={getStatusColor(status)}>
              {getStatusLabel(status)}
            </Badge>
            {author && (
              <Badge backgroundColor={theme.color.background.default}>
                Автор: {author}
              </Badge>
            )}
          </SC.leftContainer>
          <SC.leftContainer>
            <CalendarIcon color={theme.color.background.gray25}/>
            <Typography variant={'body1'} color={theme.color.background.gray25}>
              {formatDate(publish_at)} - {formatDate(unpublish_at)}
            </Typography>
          </SC.leftContainer>
        </SC.InfoContainer>
        <SC.Container>
          <Button variant={'secondary'}>
            <EditIcon/>
            Редактировать
          </Button>
          <Button variant={'secondary'} width={'auto'}>
            <StatisticsIcon color={theme.color.background.primary}/>
          </Button>
          <Button variant={'secondary'} width={'auto'}>
            <BasketIcon color={theme.color.red}/>
          </Button>
        </SC.Container>
      </SC.ContentContainer>
    </SC.CardContainer>
  );
};
