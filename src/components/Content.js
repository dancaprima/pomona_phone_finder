import React from 'react';
import Card from '../layouts/Card';
import NotFound from '../layouts/NotFound';

class Content extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        {this.props.items.length > 0 ? (
          this.props.items.map(e => {
            return (
              <React.Fragment key={e.name}>
                <Card
                  description={e.description}
                  name={e.name}
                  year={`Released ${e.release_year}`}
                  brand={e.brand}
                />
              </React.Fragment>
            );
          })
        ) : (
          <NotFound text={'Data tidak ditemukan.'} />
        )}
      </div>
    );
  }
}

export default Content;
