import { HelpCircle } from 'lucide-react';
import { useWidget } from '../hooks/useWidget';
import { SkeletonLoader } from './skeleton-loader';

export function Widget() {
  const { data, loading, error } = useWidget();

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error || !data) {
    return (
      <div className="widget-container">
        <div className="widget-error">Failed to load widget data</div>
      </div>
    );
  }

  return (
    <div className="widget-container">
      <div className="widget-heading">
        <h2 className="widget-heading-title">
          FINNRICK RATING™
        </h2>
        <HelpCircle className="icon-help" />
      </div>

      <div className="widget-content">
        <div className="widget-rating">
          <div className="widget-rating-circle">
            <span className="widget-rating-circle-text">{data.rating.grade}</span>
          </div>
          <span className="text">{data.rating.text}</span>
        </div>
        <div className="widget-content-info">
          <h3 className="widget-content-info-title">
            {data.name}
          </h3>
          <div className="widget-content-info-details">
            <p className="widget-content-info-details-item text-black">Tested {data.samples_count} Samples</p>
            <p className="widget-content-info-details-item text-gray">Last test {data.last_test}</p>
          </div>
        </div>
      </div>
    </div>
  );
}