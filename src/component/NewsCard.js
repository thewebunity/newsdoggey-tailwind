import React, { Component } from 'react'


export class NewsCard extends Component {
  render() {
    let {title , desc , imgUrl ,publish , source , url  } = this.props;
    console.log(this.props)
    return (
      <>
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
          <p className="tracking-widest text-xs title-font font-medium text-white  mb-1 bg-red-800 inline-block p-1 absolute right-0 top-0">{source}</p>
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imgUrl} alt="blog" />
            <div className="p-6">
              <h1 className="title-font text-base font-medium text-gray-900 mb-3 ">{title.slice(0,50)}....</h1>
              <p className="leading-relaxed mb-3 text-sm">{desc}...</p>
              <p className='text-xs'> {new Date(publish).toGMTString()} </p>
              <div className="flex items-center flex-wrap">
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-sm mt-3" href={url} target='_blank' rel="noreferrer" >Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NewsCard