import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AlterTableNameHistoricoAprovacoes1685405341974 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('historico_aprovacoes', new TableColumn({
            name: "acao",
            type: "varchar",
            isNullable: false
        }));
        await queryRunner.renameTable('historico_aprovacoes', 'eventos_solicitacao');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('eventos_solicitacao', 'acao')
        await queryRunner.renameTable('eventos_solicitacao', 'historico_aprovacoes');

    }

}
