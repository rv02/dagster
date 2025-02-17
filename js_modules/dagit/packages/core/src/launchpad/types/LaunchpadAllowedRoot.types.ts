// Generated GraphQL types, do not edit manually.

import * as Types from '../../graphql/types';

export type LaunchpadRootQueryVariables = Types.Exact<{
  pipelineName: Types.Scalars['String'];
  repositoryName: Types.Scalars['String'];
  repositoryLocationName: Types.Scalars['String'];
}>;

export type LaunchpadRootQuery = {
  __typename: 'DagitQuery';
  pipelineOrError:
    | {__typename: 'InvalidSubsetError'}
    | {
        __typename: 'Pipeline';
        id: string;
        isJob: boolean;
        isAssetJob: boolean;
        name: string;
        modes: Array<{__typename: 'Mode'; id: string; name: string; description: string | null}>;
        presets: Array<{
          __typename: 'PipelinePreset';
          name: string;
          mode: string;
          solidSelection: Array<string> | null;
          runConfigYaml: string;
          tags: Array<{__typename: 'PipelineTag'; key: string; value: string}>;
        }>;
        tags: Array<{__typename: 'PipelineTag'; key: string; value: string}>;
      }
    | {__typename: 'PipelineNotFoundError'; message: string}
    | {
        __typename: 'PythonError';
        message: string;
        stack: Array<string>;
        errorChain: Array<{
          __typename: 'ErrorChainLink';
          isExplicitLink: boolean;
          error: {__typename: 'PythonError'; message: string; stack: Array<string>};
        }>;
      };
  partitionSetsOrError:
    | {
        __typename: 'PartitionSets';
        results: Array<{
          __typename: 'PartitionSet';
          id: string;
          name: string;
          mode: string;
          solidSelection: Array<string> | null;
        }>;
      }
    | {__typename: 'PipelineNotFoundError'; message: string}
    | {
        __typename: 'PythonError';
        message: string;
        stack: Array<string>;
        errorChain: Array<{
          __typename: 'ErrorChainLink';
          isExplicitLink: boolean;
          error: {__typename: 'PythonError'; message: string; stack: Array<string>};
        }>;
      };
  runConfigSchemaOrError:
    | {__typename: 'InvalidSubsetError'}
    | {__typename: 'ModeNotFoundError'}
    | {__typename: 'PipelineNotFoundError'}
    | {__typename: 'PythonError'}
    | {__typename: 'RunConfigSchema'; rootDefaultYaml: string};
};

export type LaunchpadSessionPartitionSetsFragment = {
  __typename: 'PartitionSets';
  results: Array<{
    __typename: 'PartitionSet';
    id: string;
    name: string;
    mode: string;
    solidSelection: Array<string> | null;
  }>;
};

export type LaunchpadSessionPipelineFragment = {
  __typename: 'Pipeline';
  id: string;
  isJob: boolean;
  isAssetJob: boolean;
  name: string;
  modes: Array<{__typename: 'Mode'; id: string; name: string; description: string | null}>;
  presets: Array<{
    __typename: 'PipelinePreset';
    name: string;
    mode: string;
    solidSelection: Array<string> | null;
    runConfigYaml: string;
    tags: Array<{__typename: 'PipelineTag'; key: string; value: string}>;
  }>;
  tags: Array<{__typename: 'PipelineTag'; key: string; value: string}>;
};
