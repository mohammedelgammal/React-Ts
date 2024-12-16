import Creatable from "react-select/creatable";
import { OptionsType } from "src/types";

const options: OptionsType = [];

const CrateNote = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <h1 className="text-slate-700 font-semibold font-serif text-3xl mt-10 mb-5">
        New Note
      </h1>
      <form>
        <div className="flex items-center mb-5 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title</label>
            <input className="p-1" name="title" type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tags">Tags</label>
            <Creatable
              className="min-w-96"
              name="tags"
              isMulti
              options={options}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="body">Body</label>
          <textarea rows={10} name="body" />
        </div>
      </form>
    </div>
  );
};

export default CrateNote;
