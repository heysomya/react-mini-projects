import Question from './Question';

const Questions = ({ questions }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return <Question {...question} key={question.id} />;
      })}
    </section>
  );
};
export default Questions;
