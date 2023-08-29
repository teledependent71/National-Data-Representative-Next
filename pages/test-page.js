import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - National Data Representative</title>
          <meta
            property="og:title"
            content="test-page - National Data Representative"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_muu4it) => (
            <>
              <h1>{context_muu4it?.name}</h1>
            </>
          )}
          initialData={props.contextMuu4itProp}
          persistDataDuringLoading={true}
          key={props?.contextMuu4itProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  const contextMuu4itProp = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      contextMuu4itProp: contextMuu4itProp?.data?.[0],
    },
  }
}
