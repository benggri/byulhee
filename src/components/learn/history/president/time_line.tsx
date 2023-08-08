interface Tag {
  type: string;
  value : string;
}

export default function TimeLine(
  {
    index,
    name,
    terms,
    tags,
  }:{
    index: Array<Number>;
    name: string;
    terms: Array<any> | any[];
    tags: Array<Tag> | Tag[] | undefined;
  }
) {
  const getLabelColor = (type:string) => {
    switch(type) {
      case 'info' : return 'bg-blue-100';
      case 'warn' : return 'bg-yellow-100';
      case 'error': return 'bg-red-100';
      case 'debug': return 'bg-gray-100';
      default: return '';
    }
  }

  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"></span>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
        <div className="items-center justify-between mb-3 sm:flex">
          <div className="text-sm font-semibold text-gray-500 lex dark:text-gray-300 whitespace-pre-wrap">{index.join(', \n')}대 대통령  <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">{name}</a></div>
          <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
          {terms.map((term) => {
            return <p className="text-xs text-rigth font-normal text-gray-400 sm:pl-2 sm:mb-0">{term[0]} ~ {term[1] || ''}</p>
          })}
          </time>
        </div>
        {
          tags?.map((tag, _index) => {
            return (
              <div key={_index} className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                <span className={getLabelColor(tag.type)+" text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"}>{tag.type}</span>
                {tag.value}
              </div>
            );
          })
        }
      </div>
    </li>
  );
}
