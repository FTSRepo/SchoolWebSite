import React from 'react';
import images from '../../Common/BindImages/BindImages';

const BranchesPage = () => {
  const branches = [
    {
      name: 'Motihari Branch',
      principal: 'Md Abbas',
      address: 'Behind V.Mart Janpul Road East Champaran Motihari',
      description: `Schools these days are not only meant to attain information and knowledge only, rather they are platforms for collaboration of thoughts and ideas. Dawn Public School , believe that the true strength in our classroom lies in collaboration of learners, not in the knowledge of one Expert.

Aristotle once said that “Educating the mind without educating the heart is not education”. Even as we impart the education to match the advancement in technology and processes, we guide our children towards right principles, ethics and moral values.We offer our students a stress-free learning environment which encourages creativity and critical thinking. Our unique teaching and learning process with a proper blend of theory and practice crosses the boundaries of nations towards global excellence.

Educational institutions all around the world along with the aspirations of students and parents have undergone critical transformations with time. Dawn Public School aspire to provide top quality education to all, with a well-balanced and relevant curriculum.`,
      mapLink: '',
      image: images.dpsPrinciple
    },
    {
      name: 'Ramgharwa Branch',
      principal: 'Md. Naushad',
      address: 'Dawn corner shekhtoli, P/o- Bela, P/s- Ramgharwa, East Champaran, 845433',
      description: `As we begin another exciting school year, I am delighted to extend a warm welcome to all of you. It is an honour to serve as the principle of Dawn Public School, and i am eager to work together with our dedicated staff, student, and families to ensure a year filled with growth, achievements, and success.

Our mission as Dawn Public School is to foster an enviroment where every student feels valued, challanged, and inspired to reach ther full potential . This year , we are focusing not only on academics but for overall devlopment of student , e.g., enhancing education , promoting social-emotional learning, or expending extracurricular opportunities. We belive that these initiatives will help us to not only meet but exceed our academic and personal devlopment goals for our students.

I encourage all families to stay engaged with our school community . your involments is crucial in supporting your child's educational journey . please make sure to keep up with our school's news and update through our website , and do not hesitate to reach out to us with any questions feedback .

Together let's make this year a memorable and impactful one. I am confident that, with our collective efforts , we will continue to build a school community that is both nurturing and challenging for our students.

Thank you for your continued support and commitment to Dawn Public School .`,
      mapLink: '',
      image: images.belaPrinciple
    },
    {
      name: 'Jatwa Siswaniya Branch',
      principal: 'Aqeelur rahman',
      address: 'Vill- Jatwa, P/o- Siswaniya, P/s- Banjariya, Motihari  East Champaran 845401 ',
      description: `Schools these days are not only meant to attain information and knowledge only, rather they are platforms for collaboration of thoughts and ideas. Dawn Public School , believe that the true strength in our classroom lies in collaboration of learners, not in the knowledge of one Expert.

Aristotle once said that “Educating the mind without educating the heart is not education”. Even as we impart the education to match the advancement in technology and processes, we guide our children towards right principles, ethics and moral values.We offer our students a stress-free learning environment which encourages creativity and critical thinking. Our unique teaching and learning process with a proper blend of theory and practice crosses the boundaries of nations towards global excellence.

Educational institutions all around the world along with the aspirations of students and parents have undergone critical transformations with time. Dawn Public School aspire to provide top quality education to all, with a well-balanced and relevant curriculum.`,
      mapLink: '',
      image: images.dummyPic
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12 relative">
          Our Branches
          <span className="block w-24 h-1 bg-orange-400 mx-auto mt-2 rounded"></span>
        </h1>

        {branches.map((branch, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start mb-20 gap-10"
          >
            {/* Left: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={branch.image}
                alt={`${branch.name}`}
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-1/2 text-gray-800">
              <h2 className="text-3xl font-extrabold mb-4 text-black">{branch.name}</h2>
              <p className="text-base leading-7 whitespace-pre-line mb-6">{branch.description}</p>
              <p className="italic text-sm text-gray-600 mb-1">Principal</p>
              <p className="font-semibold text-lg mb-1">{branch.principal}</p>
              <p className="text-sm italic text-gray-500">
                {branch.address} <span className="text-gray-400">(Dawn Public School)</span>
              </p>
              {branch.mapLink && (
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  📍 View on Map
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchesPage;
