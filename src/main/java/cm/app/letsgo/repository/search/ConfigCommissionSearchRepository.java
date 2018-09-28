package cm.app.letsgo.repository.search;

import cm.app.letsgo.domain.ConfigCommission;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the ConfigCommission entity.
 */
public interface ConfigCommissionSearchRepository extends ElasticsearchRepository<ConfigCommission, Long> {
}
