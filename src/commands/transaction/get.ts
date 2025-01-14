import {RpcCommand} from '../../lib/rpc-command'

export default class TransactionGet extends RpcCommand {
  static description = 'Show transaction information'

  static args = [{
    name: 'hash',
    description: 'Transaction hash of the transaction to get',
    required: true,
  }]

  static flags = {
    ...RpcCommand.flags,
  }

  async run() {
    const {args} = this.parse(TransactionGet)

    const result = await this.$rpc.call('getTransactionByHash', [args.hash])

    console.dir(result, {depth: Infinity, maxArrayLength: Infinity})
  }
}
