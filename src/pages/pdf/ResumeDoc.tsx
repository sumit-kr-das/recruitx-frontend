import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { convertDate } from "../company/MyJobs";

type Exprience = {
  userId: string;
  skills: string[];
  companyName: string;
  designation: string;
  exprience: number;
  type: string;
  startDate: string;
  endDate?: string;
  jobProfile: string;
  createdAt: string;
  updatedAt?: string;
};

type Project = {
  userId: string;
  name: string;
  description: string;
  skills: string[];
  startDate: string;
  endDate?: string;
  associate: string;
};

type Education = {
  userId: string;
  degree: string;
  college: string;
  course: string;
  courseType: string;
  admissionYear: number;
  passYear: number;
  marks: number;
  createdAt?: string;
  updatedAt?: string;
};

type Certificate = {
  userId: string;
  title: string;
  source: string;
  description: string;
  startDate: string;
  endDate?: string;
};

const ResumeDoc = ({ data }: { data: any }) => {
  const styles = StyleSheet.create({
    container: {
      width: "95%",
      margin: "auto",
    },
    maincontainer: {
      display: "flex",
      flexDirection: "column",
    },
    heading: {
      fontSize: "16px",
      fontWeight: "extrabold",
      paddingLeft: "20px",
      paddingTop: "20px",
    },
    status: {
      fontSize: "10px",
      fontWeight: "bold",
      paddingLeft: "20px",
    },
    infoContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      padding: "5px 20px",
    },
    infoText: {
      fontSize: "8px",
    },
    exprience: {
      padding: "6px 20px",
    },
    line: {
      width: "100%",
      height: "3px",
      backgroundColor: "#000",
      marginTop: "3px",
    },
    roleHeding: {
      fontSize: "14px",
    },
    role: {
      fontSize: "11px",
      marginTop: "5px",
    },
    companyName: {
      fontSize: "10px",
      fontWeight: "bold",
      marginTop: "2px",
    },
    companyInfo: {
      display: "flex",
      flexDirection: "row",
      marginTop: "3px",
    },
    years: {
      fontSize: "8px",
    },
    companyAddress: {
      fontSize: "8px",
      marginLeft: "20px",
    },
    workDescription: {
      fontSize: "8px",
      marginTop: "3px",
    },
    skills: {
      display: "flex",
      flexDirection: "row",
      gap: "5px",
      marginTop: "5px",
    },
    skill: {
      padding: "5px 5px",
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "8px",
      borderRadius: "6px",
    },
    exprienceContainer: {
      marginTop: "4px",
    },
    projects: {
      padding: "4px 20px",
    },
    education: {
      padding: "4px 20px",
    },
    marks: {
      fontSize: "8px",
    },
  });
  return (
    <>
      <Document>
        <Page size="A4">
          <View style={styles.maincontainer}>
            <Text style={styles.heading}>{data?.name}</Text>
            <Text style={styles.status}>
              {data?.info?.objective || "Enter objective"}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{data?.email}</Text>
            <Text style={styles.infoText}>{data?.phoneNo}</Text>
            <Text style={styles.infoText}>
              {data?.info?.address || "Enter address"}
            </Text>
          </View>
          {/* exprience */}
          {data?.exprience.length > 0 && (
            <>
              <View style={styles.exprience}>
                <Text style={styles.roleHeding}>Exprience</Text>
                <View style={styles.line}></View>
                {data?.exprience?.map((item: Exprience, index: number) => (
                  <View style={styles.exprienceContainer} key={index}>
                    <Text style={styles.role}>{item?.designation}</Text>
                    <Text style={styles.companyName}>{item?.companyName}</Text>
                    <View style={styles.companyInfo}>
                      <Text style={styles.years}>
                        {convertDate(item?.startDate)} -{" "}
                        {item?.endDate
                          ? convertDate(item?.endDate)
                          : "Continue"}
                      </Text>
                    </View>
                    <Text style={styles.workDescription}>
                      {item?.jobProfile}
                    </Text>
                    <View style={styles.skills}>
                      {item?.skills?.map((skill, i) => (
                        <Text style={styles.skill} key={i}>
                          {skill}
                        </Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </>
          )}

          {/* projects */}
          {data?.project?.length > 0 && (
            <>
              <View style={styles.projects}>
                <Text style={styles.roleHeding}>Projects</Text>
                <View style={styles.line}></View>
                {data?.project?.map((item: Project, index: number) => (
                  <View style={styles.exprienceContainer} key={index}>
                    <Text style={styles.role}>{item.name}</Text>
                    <View style={styles.companyInfo}>
                      <Text style={styles.years}>
                        {convertDate(item.startDate)} -{" "}
                        {item?.endDate
                          ? convertDate(item?.endDate)
                          : "Continue"}
                      </Text>
                      <Text style={styles.companyAddress}>
                        {item?.associate}
                      </Text>
                    </View>
                    <Text style={styles.workDescription}>
                      {item?.description}
                    </Text>
                    <View style={styles.skills}>
                      {item?.skills?.map((skill, i) => (
                        <Text style={styles.skill} key={i}>
                          {skill}
                        </Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </>
          )}
          {/* skills */}
          <View style={styles.education}>
            <Text style={styles.roleHeding}>Skills</Text>
            <View style={styles.line}></View>
            <View style={styles.skills}>
              {data?.info?.skills?.map((skill: string, index: number) => (
                <Text style={styles.skill} key={index}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          {/* education */}
          {data?.education?.length > 0 && (
            <>
              <View style={styles.education}>
                <Text style={styles.roleHeding}>Education</Text>
                <View style={styles.line}></View>
                {data?.education?.map((item: Education, index: number) => (
                  <View style={styles.exprienceContainer} key={index}>
                    <Text style={styles.role}>
                      {item?.degree} ({item?.course})
                    </Text>
                    <Text style={styles.companyName}>{item?.college}</Text>
                    <Text style={styles.years}>
                      {item?.admissionYear} - {item?.passYear}
                    </Text>
                    <Text style={styles.marks}>Marks: {item?.marks}%</Text>
                  </View>
                ))}
              </View>
            </>
          )}

          {/* certificates */}
          {data?.certificate?.length > 0 && (
            <>
              <View style={styles.education}>
                <Text style={styles.roleHeding}>Certificates</Text>
                <View style={styles.line}></View>
                {data?.certificate?.map((item: Certificate, index: number) => (
                  <View style={styles.exprienceContainer} key={index}>
                    <Text style={styles.role}>{item?.title}</Text>
                    <Text style={styles.companyName}>{item?.source}</Text>
                    <Text style={styles.years}>
                      {convertDate(item?.startDate)} -{" "}
                      {item?.endDate ? convertDate(item?.endDate) : "Continue"}
                    </Text>
                    <Text style={styles.workDescription}>
                      {item?.description}
                    </Text>
                  </View>
                ))}
              </View>
            </>
          )}
        </Page>
      </Document>
    </>
  );
};

export default ResumeDoc;
