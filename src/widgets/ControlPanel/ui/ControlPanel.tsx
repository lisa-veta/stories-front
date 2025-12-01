import * as SC from './ControlPanel.styles';
import { Button } from '@shared/ui/Button';
import { FiltersIcon, PlusIcon } from '@shared/ui/Icons';
import { CustomSelect, DateSelect } from '@shared/ui/Select';
import type { Dayjs } from 'dayjs';
import type { ContentFilters } from '@pages/AccountPage/ui/AccountPage';

interface ControlPanelProps {
  filters: ContentFilters;
  onFiltersChange: (filters: ContentFilters) => void;
}

export const ControlPanel = ({ filters, onFiltersChange }: ControlPanelProps) => {
  const handleProjectTypeChange = (value: string[]) => {
    onFiltersChange({
      ...filters,
      projectTypes: value,
    });
  };

  const handleStatusChange = (value: string[]) => {
    onFiltersChange({
      ...filters,
      statuses: value,
    });
  };

  const handleDateChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    onFiltersChange({
      ...filters,
      dateRange: dates ? [
        dates[0] ? dates[0].format('YYYY-MM-DD') : null,
        dates[1] ? dates[1].format('YYYY-MM-DD') : null,
      ] : [null, null],
    });
  };

  return (
    <SC.ControlPanel>
      <Button width={'auto'} paddingRight={20} paddingBottom={5} paddingTop={5}>
        <PlusIcon/>
        Создать
      </Button>
      <SC.Block>
        <CustomSelect
          options={[
            { value: 'my', label: 'Мои проекты' },
            { value: 'other', label: 'Другие проекты' },
          ]}
          placeholder="Проект"
          value={filters.projectTypes}
          onChange={handleProjectTypeChange}
          style={{
            width: '290px',
          }}
        />
        <CustomSelect
          options={[
            { value: 'draft', label: 'Черновик' },
            { value: 'active', label: 'Активно' },
            { value: 'archived', label: 'Архив' },
          ]}
          placeholder="Статус публикации"
          value={filters.statuses}
          onChange={handleStatusChange}
          style={{
            width: '290px',
          }}
        />
        <DateSelect onChange={handleDateChange} />
        <Button variant={'secondary'} width={'auto'} paddingRight={20} paddingBottom={5} paddingTop={5} >
          <FiltersIcon/>
          Больше фильтров
        </Button>
      </SC.Block>
    </SC.ControlPanel>
  );
};
