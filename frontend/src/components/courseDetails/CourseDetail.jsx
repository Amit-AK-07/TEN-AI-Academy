import { FaArrowRightLong, FaSquareXTwitter } from "react-icons/fa6";
import { FaCheckCircle, FaLinkedin } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { PiCellSignalFullThin } from "react-icons/pi";
import { RiDoubleQuotesL } from "react-icons/ri";

const features = [
  {
    title: "RAG for real-world applications",
    description:
      "Learn how retrieval and generation work together, and how to design each component to build reliable, flexible RAG systems.",
  },
  {
    title: "Search techniques and vector databases",
    description:
      "Use techniques like keyword search, semantic search, hybrid search, chunking, and query parsing to support RAG applications across domains like healthcare and e-commerce.",
  },
  {
    title: "Prompt design, evaluation, and deployment",
    description:
      "Craft prompts that make the most of retrieved context, evaluate RAG system performance, and prepare your pipeline for production.",
  },
];

const projectFeatures = [
  {
    title: "Build your first RAG system",
    desc: "by writing retrieval and prompt augmentation functions and passing structured input into an LLM.",
  },
  {
    title: "Implement and compare retrieval methods",
    desc: "like semantic search, BM25, and Reciprocal Rank Fusion to see how each impacts LLM responses.",
  },
  {
    title: "Scale your RAG system",
    desc: "using Weaviate and a real news dataset—chunking, indexing, and retrieving documents with a vector database.",
  },
  {
    title: "Develop a domain-specific chatbot",
    desc: "for a fictional clothing store that answers FAQs and provides product suggestions based on a custom dataset.",
  },
  {
    title: "Improve chatbot reliability",
    desc: "by handling real-world challenges like dynamic pricing and logging user interactions for monitoring and debugging.",
  },
  {
    title: "Use open-source LLMs hosted by Together AI",
    desc: "for a fictional clothing store that answers FAQs and provides product suggestions based on a custom dataset.",
  },
];

const modules = [
  {
    title: "Module 1: RAG Overview",
    desc: "Introduction to RAG, applications of RAG, RAG architecture overview, intro to LLMs, brief intro to Python, LLM calls, intro to information retrieval",
  },
  {
    title: "Module 2: Information Retrieval and Search Foundations",
    desc: "Retriever architecture overview, metadata filtering, keyword search (TF-IDF and BM25), semantic search, vector embeddings in RAGv, hybrid search, evaluating retrieval, retrieval metrics",
  },
  {
    title: "Module 3: Information Retrieval with Vector Databases",
    desc: "ANN algorithms, vector databases, intro to the Weaviate API, chunking, query parsing, cross-encoders and ColBERT, reranking",
  },
  {
    title: "Module 4: LLMs and Text Generation",
    desc: "Transformer architecture, LLM sampling strategies, exploring LLM capabilities, choosing your LLM, prompt engineering, handling hallucinations, evaluating your LLM’s performance, agentic RAG, RAG vs. fine-tuning",
  },
  {
    title: "Module 5: RAG Systems in Production",
    desc: "What makes production challenging, implementing RAG evaluation strategies, logging, monitoring, and observability, tracing a RAG system, customized evaluation, quantization, cost vs response quality, latency vs response quality, security, multimodal RAG",
  },
];

const CourseDetail = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D8BFF] to-[#0070F3] text-white px-6 py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Retrieval Augmented
              <br />
              Generation (RAG)
              <br />
              Course
            </h1>
            <p className="text-lg mb-6 max-w-xl">
              Build Retrieval Augmented Generation (RAG) systems for real-world
              applications.
            </p>
            <p className="text-base mb-8 max-w-xl">
              Gain fundamental understanding and the practical knowledge to
              develop production-ready RAG applications, from architecture to
              deployment and evaluation.
            </p>
            <button className="bg-[#FF5A5F] text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition flex items-center gap-2">
              Enroll Now
              <FaArrowRightLong />
            </button>
          </div>

          {/* Illustration Image */}
          <div className="md:w-1/2 z-0 relative">
            <img
              src=""
              alt=""
              className="w-full max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </section>

      {/* Video + Features */}
      <section className="bg-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center pb-16">
          {/* Video Thumbnail */}
          <div className="inline-block rounded-lg overflow-hidden py-28">
            <img
              src=""
              alt="Course preview"
              className="w-full max-w-3xl mx-auto object-cover"
            />
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="flex shadow-lg py-6 px-8 rounded-lg min-h-[200px]"
              >
                <FaCheckCircle className="text-blue-900 text-2xl mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">
                    {feat.title}
                  </h4>
                  <p className="text-md text-gray-600">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg pt-20 pb-32 text-center max-w-7xl mx-auto px-20">
        <h2 className="text-4xl font-bold mb-24">The benefits of RAG</h2>
        <p className="max-w-6xl mx-auto text-gray-500 text-xl font-semibold">
          RAG helps large language models generate more accurate and useful
          responses by retrieving relevant information from knowledge bases of
          information they weren't trained on. These sources of information are
          often private, recent, or domain-specific, which gives an LLM more
          context to provide grounded answers. In this course, you'll learn how
          to design and implement every part of a RAG system, from retrievers
          and vector databases to large language models, and evaluation
          platforms. You'll understand fundamental principles and apply key
          techniques at both the component and system levels to effectively
          connect LLMs to relevant external data sources.
        </p>
      </section>

      {/* Why Enroll */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-9 text-center">Why Enroll?</h2>
        <p className="text-gray-500 text-justify mb-5 max-w-3xl mx-auto text-xl">
          Large language models are powerful, but without access to the right
          information, they often make mistakes. RAG fixes that by grounding
          model responses in relevant, often private or up-to-date data. As LLMs
          move into real products and workflows, the ability to build robust,
          reliable RAG systems is becoming a must-have skill for engineers
          working in AI.
        </p>
        <p className="text-gray-500 text-justify mb-5 max-w-3xl mx-auto text-xl">
          This course, taught by AI engineer and educator Zain Hasan, gives you
          the{" "}
          <span className="text-black font-semibold">
            {" "}
            hands-on experience and conceptual understanding to design, build,
            and evaluate production-ready RAG systems.{" "}
          </span>
        </p>
        <p className="text-gray-500 text-justify mb-5 max-w-3xl mx-auto text-xl">
          You'll learn to choose the right architecture for your use case, work
          with vector databases like Weaviate, experiment with prompt and
          retrieval strategies, and monitor performance using tools like Phoenix
          from Arize.
        </p>
        <p className="text-gray-500 text-justify mb-5 max-w-3xl mx-auto text-xl">
          Throughout the course,{" "}
          <span className="text-black font-semibold">
            {" "}
            you'll build progressively more advanced components of a RAG system,
          </span>{" "}
          using real-world datasets from domains like e-commerce, media, and
          healthcare. You'll also explore critical tradeoffs, like when to use
          hybrid retrieval, how to manage context window limits, and how to
          balance latency and cost, preparing you to make informed engineering
          decisions in practice.
        </p>
        <p className="text-gray-500 text-justify mb-5 max-w-3xl mx-auto text-xl">
          RAG is at the core of LLM systems that need to be accurate, grounded,
          and adaptable, whether for internal tools, customer-facing assistants,
          or specialized applications. This course helps you{" "}
          <span className="text-black font-semibold">
            {" "}
            move beyond proof-of-concept demos into real-world deployment,
          </span>{" "}
          equipping you with the skills to build, evaluate, and evolve RAG
          systems as the ecosystem grows.
        </p>
        <p className="text-gray-500 text-justify mb-5 max-w-3xl mx-auto text-xl">
          Start building RAG systems designed for real-world use.
        </p>
        <div className="text-center mt-6">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="bg-white pb-16 text-center">
        <h2 className="text-4xl font-bold mb-9 text-gray-900">Instructor</h2>

        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-md font-medium text-gray-600">Zain Hasan</h3>

          {/* Profile Image */}
          <img
            src="" //
            alt="Zain Hasan"
            className="w-24 h-24 rounded-full object-cover"
          />

          {/* Social Icons */}
          <div className="flex space-x-4">
            <FaLinkedin className="text-2xl" />
            <FaSquareXTwitter className="text-2xl" />
          </div>

          {/* Bio */}
          <p className="max-w-2xl text-gray-600 text-sm md:text-base my-4 px-4">
            Zain Hasan is an AI engineer and educator with nearly a decade of
            experience building and teaching machine learning systems. He
            combines deep technical knowledge with a practical approach to
            system design, helping you understand both the theory and the
            real-world tradeoffs behind RAG architectures. His teaching style
            feels less like a lecture and more like learning from a sharp,
            thoughtful teammate who's been there before.
          </p>
        </div>

        {/* Course Info Tags */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 gap-24 bg-[#76aab9] bg-opacity-70 rounded-xl px-6 py-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 text-white">
            <IoBookOutline className="text-xl" />
            <span>5 Modules</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <GoClock className="text-xl" />
            <span>Self-paced</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <PiCellSignalFullThin className="text-xl" />
            <span>Intermediate</span>
          </div>
        </div>
      </section>

      {/* Real-world Projects */}
      <section className="bg-[#0074f0] text-white py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 mb-5 h-2 mx-auto bg-red-500 border-t-1 "></div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn through real-world projects
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg">
            Across five modules, you'll complete hands-on programming
            assignments that guide you through building each core part of a RAG
            system, from simple prototypes to production-ready components.
            Through hands-on labs, you'll:
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {projectFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <FaCheckCircle className="text-2xl mt-2 text-blue-900 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition">
              Enroll Now!
            </button>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Course Syllabus
          </h2>

          {/* Syllabus Container */}
          <div className="rounded-xl p-8 flex flex-col md:flex-row justify-between text-left">
            {/* Course Title */}
            <div className="bg-pink-100 h-[max-content] flex-1 pt-3 pb-16 pl-3 pr-4 rounded-l-lg">
              <h3 className="text-lg font-semibold text-gray-800">
                Course 1: Retrieval Augmented Generation (RAG)
              </h3>
            </div>

            {/* Module Descriptions */}
            <div className="bg-pink-100 flex-1 space-y-6 text-sm text-gray-700 p-7 rounded-r-lg rounded-bl-lg">
              {modules.map((m) => (
                <div className="space-y-4 mb-7">
                  <h4 className="font-bold">{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommend Background */}
      <section className="text-center max-w-7xl mx-auto px-20 pb-10">
        <h2 className="text-4xl font-bold mb-12">Recommended Background</h2>
        <p className="max-w-2xl text-left mx-auto text-gray-500 text-xl font-semibold">
          Intermediate Python skills required; basic knowledge of generative AI
          and high school-level math is helpful.
        </p>
        <div className="mt-12">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition">
            Enroll Now!
          </button>
        </div>
      </section>

      <div className="w-12 my-10 h-2 mx-auto bg-red-500"></div>

      {/* Reviews Section */}
      <section className="text-center max-w-6xl mx-auto px-20 pb-10">
        <h2 className="text-4xl font-bold mb-12 max-w-xl mx-auto">
          Learner reviews from other DeepLearning.AI courses
        </h2>
        <div className="flex gap-8">
          <div className="shadow-lg py-10 px-3 text-gray-600 flex flex-col gap-20">
            <p>
              I took this course purely out of curiosity. After becoming aware
              of ChatGPT and Midjourney and then taking a short course on
              engineering the prompts to get the desired result, I became more
              intrigued with the topic of AI. I found this most helpful with
              regards to getting an idea about what AI actually is as opposed to
              what Hollywood conditioned me to believe it might be.
            </p>

            <div className="flex flex-col items-center gap-1">
              <RiDoubleQuotesL className="text-red-500 text-2xl" />
              <span className="text-red-500 font-semibold">Chris C</span>
              <span>Software Engineer</span>
            </div>
          </div>

          <div className="shadow-lg py-10 px-3 text-gray-600 flex flex-col gap-20">
            <p>
              I took this course purely out of curiosity. After becoming aware
              of ChatGPT and Midjourney and then taking a short course on
              engineering the prompts to get the desired result, I became more
              intrigued with the topic of AI. I found this most helpful with
              regards to getting an idea about what AI actually is as opposed to
              what Hollywood conditioned me to believe it might be.
            </p>

            <div className="flex flex-col items-center gap-1">
              <RiDoubleQuotesL className="text-red-500 text-2xl" />
              <span className="text-red-500 font-semibold">Chris C</span>
              <span>Software Engineer</span>
            </div>
          </div>

          <div className="shadow-lg py-10 px-3 text-gray-600 flex flex-col gap-20">
            <p>
              I took this course purely out of curiosity. After becoming aware
              of ChatGPT and Midjourney and then taking a short course on
              engineering the prompts to get the desired result, I became more
              intrigued with the topic of AI. I found this most helpful with
              regards to getting an idea about what AI actually is as opposed to
              what Hollywood conditioned me to believe it might be.
            </p>

            <div className="flex flex-col items-center gap-1">
              <RiDoubleQuotesL className="text-red-500 text-2xl" />
              <span className="text-red-500 font-semibold">Chris C</span>
              <span>Software Engineer</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
