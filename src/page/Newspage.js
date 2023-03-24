import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsCard from '../component/NewsCard'


export class Newspage extends Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0
    }
  }
  async componentDidMount() {
    this.props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9b2bec38269a4a7ab665833a16afe05f`;
    this.props.setProgress(50);
    const data = await fetch(url);
    this.props.setProgress(70);
    const parsedData = await data.json();
    this.props.setProgress(100);
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }

  async fetchMoreData() {
    this.props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9b2bec38269a4a7ab665833a16afe05f`;
    this.props.setProgress(50);
    const data = await fetch(url);
    this.props.setProgress(70);
    const parsedData = await data.json();
    this.props.setProgress(100);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  }
  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          hasMore={this.state.articles.length !== this.state.totalResults}
          next={this.fetchMoreData}
        >
          <div className="flex flex-wrap container mx-auto">
            {this.state.articles.map((value, index) => {
              return (
                <NewsCard title={value.title} desc={value.description} imgUrl={value.urlToImage}
                  publish={value.publishedAt} url={value.url} author={value.author} source={value.source.name} key={index}
                />
              )
            })}
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default Newspage