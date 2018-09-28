package cm.app.letsgo.repository.search;

import cm.app.letsgo.domain.ConfigFare;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the ConfigFare entity.
 */
public interface ConfigFareSearchRepository extends ElasticsearchRepository<ConfigFare, Long> {
}
