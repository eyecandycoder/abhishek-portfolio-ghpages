import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-black">
        <Loader2 className="animate-spin text-white h-12 w-12" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <section>
          <h1 className="text-4xl font-bold">Abhishek Chauhan</h1>
          <p className="text-lg text-gray-600">Data Engineer</p>
          <a className="text-blue-600" href="mailto:abhishekchauhan5757@gmail.com">abhishekchauhan5757@gmail.com</a>
          <p>📞 +91 9205873909</p>
          <a className="text-blue-600" href="https://www.linkedin.com/in/abhishek-chauhan007/" target="_blank">LinkedIn Profile</a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Professional Summary</h2>
          <p>
            Results-driven Data Engineer with 3+ years of experience in designing and migrating large-scale data pipelines using PySpark, Databricks, and AWS. Proven track record in building dynamic, scalable ETL solutions and driving efficient data architecture in enterprise environments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <ul className="list-disc list-inside">
            <li>Python, SQL</li>
            <li>Apache Spark, Databricks</li>
            <li>AWS, GCP</li>
            <li>Talend, Apache Airflow</li>
            <li>Data Lake Technologies</li>
            <li>Tableau, Statistical Modelling, Jupyter Notebook</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <p className="font-semibold">Senior Data Engineer – Genpact, Noida (Nov 2021 – Present)</p>
          <ul className="list-disc list-inside">
            <li>Built dynamic ETL workflows using PySpark, Databricks, and Talend</li>
            <li>Migrated data pipelines from Greenplum to Databricks</li>
            <li>Leveraged AWS and Airflow for pipeline orchestration and cloud deployment</li>
            <li>Optimized jobs and automated data quality checks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Education</h2>
          <p><strong>B.Tech – JSS Academy of Technical Education, Noida (2020)</strong></p>
          <ul className="list-disc list-inside">
            <li>Technical Head of student societies</li>
            <li>Hackathon & MUN participant, IoT & web project experience</li>
            <li>Final Year Project: Remote Override Traffic Density Control System</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <p>Databricks Certified Data Engineer</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Volunteer Experience</h2>
          <p className="font-semibold">Founding Member & Technical Head – Slum Swaraj Foundation (2017 – 2021)</p>
          <ul className="list-disc list-inside">
            <li>Expanded nonprofit focused on education and empowerment</li>
            <li>Managed 1500+ volunteers, led tech operations and represented at national forums</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
