import { PDFViewer } from '@react-pdf/renderer';
import ResumeDoc from './ResumeDoc';
import { useGetAllUserInfoQuery } from '../../features/user/get/getAllUserInfoApiSlice';

const Resume = () => {
    const { data } = useGetAllUserInfoQuery();
    console.log(data);

    return (

        <>
            <div className='h-[100vh]'>
                <PDFViewer
                    showToolbar={true}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <ResumeDoc data={data} />
                </PDFViewer>
            </div>


            {/* <PDFDownloadLink
                document={<h1>This is the pdf viewer</h1>}
                fileName='somename.pdf'
            >
                {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink> */}
        </>
    )
}

export default Resume