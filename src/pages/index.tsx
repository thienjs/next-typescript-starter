import { NextPage } from 'next'
import { FaLock } from 'react-icons/fa'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/Layout'
import { useMessage } from '~/lib/message'

const IndexPage: NextPage<NextAppPageProps> = ({}) => {
  const { handleMessage } = useMessage()

  return (
    <Layout useBackdrop={true} usePadding={false}>
      <div className="h-screen flex flex-col justify-center items-center relative">


      </div>
    </Layout>
  )
}

export default IndexPage

IndexPage.defaultProps = {
  meta: {
    title: 'Thien Tran - FullStack Developer'
  }
}