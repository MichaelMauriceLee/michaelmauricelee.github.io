import { FilePdfFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';

const ExternalLinks = () => (
  <div className="fixed w-fit left-0 top-1/2 hidden md:block -translate-y-1/2 ml-6">
    <div className="flex flex-col bg-white rounded p-2">
      <a
        className="hover:text-blue-500"
        href="https://drive.google.com/uc?export=download&id=14uTJA8ZUPIWCi2V-f8s8ul3-qnQsKfiF"
      >
        <FilePdfFilled />
      </a>
      <a
        className="hover:text-blue-500"
        href="https://www.linkedin.com/in/michael-lee-8967b614a/"
      >
        <LinkedinFilled />
      </a>
      <a
        className="hover:text-blue-500"
        href="https://github.com/MichaelMauriceLee"
      >
        <GithubFilled />
      </a>
    </div>
  </div>
);

export default ExternalLinks;
