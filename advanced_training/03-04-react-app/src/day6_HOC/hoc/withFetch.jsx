import React, { Component } from "react";

export default function withFetch(OldComponent, API_URL) {
  return class NewComponent extends Component {
    state = {
      data: null,
      loading: true,
    };

    componentDidMount() {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }

    render() {
      const { loading, data } = this.state;

      return <OldComponent loading={loading} data={data} {...this.props} />;
    }
  };
}
