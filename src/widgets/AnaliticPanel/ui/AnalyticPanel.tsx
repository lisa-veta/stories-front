import React, { useMemo } from 'react';
import Plot from 'react-plotly.js';
import type { Layout, Data } from 'plotly.js';
import type { ContentPreview } from '@shared/api';
import { useTheme } from 'styled-components';

interface TimelineGanttProps {
  items: ContentPreview[];
}

export const AnalyticPanel: React.FC<TimelineGanttProps> = ({ items }) => {
  const theme = useTheme();
  const { traces, layout } = useMemo(() => {
    if (!items.length) {
      return { traces: [], layout: {} };
    }

    const sortedItems = [...items].sort(
      (a, b) => new Date(a.publish_at).getTime() - new Date(b.publish_at).getTime(),
    );

    const yLabels = sortedItems.map(item => item.title.length > 30
      ? `${item.title.substring(0, 30)  }...`
      : item.title,
    );

    const startDates = sortedItems.map(item => new Date(item.publish_at));
    const endDates = sortedItems.map(item =>
      item.unpublish_at ? new Date(item.unpublish_at) : new Date(),
    );

    const formatDate = (dateString: string): string => {
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU');
    };

    const colors = sortedItems.map(item => {
      switch (item.status) {
      case 'draft': return theme.color.purple;
      case 'active': return theme.color.green;
      case 'archived': return theme.color.orange;
      default: return theme.color.purple;
      }
    });

    const trace: Data = {
      type: 'bar',
      orientation: 'h',
      y: yLabels,
      x: endDates.map((end, i) => end.getTime() - startDates[i].getTime()),
      base: startDates.map(start => start.getTime()),
      marker: {
        color: colors,
        cornerradius: 100,
      },
      hoverinfo: 'text',
      hovertemplate: sortedItems.map((item) => {
        const startDate = formatDate(item.publish_at);
        const endDate = item.unpublish_at
          ? formatDate(item.unpublish_at)
          : 'Не задано';

        const statusLabels = {
          draft: 'Черновик',
          active: 'Активно',
          archived: 'Архив',
        };

        return `<b>${item.title}</b><br>` +
          `Статус: ${statusLabels[item.status] || item.status}<br>` +
          `Начало: ${startDate}<br>` +
          `Окончание: ${endDate}`;
      }),
    };

    const layout: Partial<Layout> = {
      title: 'Временная шкала контента',
      xaxis: {
        title: 'Время',
        type: 'date',
        tickformat: '%d %b %Y',
      },
      yaxis: {
        title: 'Контент',
        automargin: true,
      },
      barmode: 'overlay',
      height: Math.max(400, items.length * 30),
      margin: { l: 200, r: 30, t: 60, b: 80 },
      showlegend: false,
    };

    return { traces: [trace], layout };
  }, [items]);

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <Plot
        data={traces}
        layout={layout}
        config={{
          displayModeBar: true,
          displaylogo: false,
          responsive: true,
        }}
        style={{ width: '100%', minWidth: '800px' }}
        useResizeHandler
      />
    </div>
  );
};
