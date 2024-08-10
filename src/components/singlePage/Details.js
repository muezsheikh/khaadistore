import React from 'react'

const Details = ({ params, product, details, setDetails, sizes }) => {
  return (
    <>
      <div className='details'>
        <div className='top'>
          <h3
            onClick={() => setDetails('details')}
            className={details === 'details' && 'activeDetail'}
          >
            Details
          </h3>
          {product.size.length > 1 && (
            <h3
              className={`sizeChartHeading  ${
                details === 'sizeChart' && 'activeChart'
              }`}
              onClick={() => setDetails('sizeChart')}
            >
              Size Chart
            </h3>
          )}
        </div>
        <hr />
        {details === 'details' ? (
          <>
            <div className='detailContent'>
              {product.details.Fit && (
                <p>
                  <span>Fit:</span>
                  {product.details.Fit}
                </p>
              )}
              {product.details.bottomFabric && (
                <p>
                  <span>bottom Fabric:</span>
                  {product.details.bottomFabric}
                </p>
              )}
              {product.details.description && (
                <p>
                  <span>Description:</span>
                  {product.details.description}
                </p>
              )}
              {product.details.dupattaFabric && (
                <p>
                  <span>Dupatta Fabric:</span>
                  {product.details.dupattaFabric}
                </p>
              )}
              {product.details.fabricContent && (
                <p>
                  <span>Fabric content:</span>
                  {product.details.fabricContent}
                </p>
              )}
              {product.details.technique && (
                <p>
                  <span>Technique:</span>
                  {product.details.technique}
                </p>
              )}
              {product.details.topFabric && (
                <p>
                  <span>Top fabric:</span>
                  {product.details.topFabric}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className='sizeChartBox'>
              <div className='heading'>
                <p>Size</p>
                <p>Shoulder{params.collection === 'western' && '/Sleeve'}</p>
                <p>Chest{params.collection === 'ready-to-wear' && '/Bust'}</p>
              </div>
              <div className='contentSection'>
                <div className='sizes'>
                  {sizes.map((x) => (
                    <p>{x.title}</p>
                  ))}
                </div>
                <div className='shoulders'>
                  {sizes.map((x) => (
                    <p>{x.shoulder}</p>
                  ))}
                </div>
                <div className='chests'>
                  {sizes.map((x) => (
                    <p>{x.chestBust}</p>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Details
