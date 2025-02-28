import { AsyncHandler, LambdaInterface, SyncHandler } from '@aws-lambda-powertools/commons';
import { Handler } from 'aws-lambda';
import { ConfigServiceInterface } from '../config';
import { LogFormatterInterface } from '../formatter';
import { Environment, LogAttributes, LogAttributesWithMessage, LogLevel } from './Log';

type ClassThatLogs = {
  [key in 'debug' | 'error' | 'info' | 'warn']: (input: LogItemMessage, ...extraInput: LogItemExtraInput) => void;
};

type LoggerOptions = {
  logLevel?: LogLevel
  serviceName?: string
  sampleRateValue?: number
  logFormatter?: LogFormatterInterface
  customConfigService?: ConfigServiceInterface
  persistentLogAttributes?: LogAttributes
  environment?: Environment
};

type LambdaFunctionContext = {
  functionName: string
  memoryLimitInMB: number
  functionVersion: string
  coldStart: boolean
  invokedFunctionArn: string
  awsRequestId: string
};

type PowertoolLogData = LogAttributes & {
  environment?: Environment
  serviceName: string
  sampleRateValue?: number
  lambdaFunctionContext: LambdaFunctionContext
  xRayTraceId?: string
  awsRegion: string
};

type UnformattedAttributes = {
  environment?: Environment
  error?: Error
  serviceName: string
  sampleRateValue?: number
  lambdaContext?: LambdaFunctionContext
  xRayTraceId?: string
  awsRegion: string
  logLevel: LogLevel
  timestamp: Date
  message: string
};

type LogItemMessage = string | LogAttributesWithMessage;
type LogItemExtraInput = Array<Error | LogAttributes | unknown>;

type HandlerMethodDecorator = (
  target: LambdaInterface,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<SyncHandler<Handler>> | TypedPropertyDescriptor<AsyncHandler<Handler>>
) => void;

export {
  ClassThatLogs,
  LogItemMessage,
  LogItemExtraInput,
  HandlerMethodDecorator,
  LambdaFunctionContext,
  UnformattedAttributes,
  PowertoolLogData,
  LoggerOptions,
};
